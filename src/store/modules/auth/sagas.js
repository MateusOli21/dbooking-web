import { all, call, put, takeLatest } from "redux-saga/effects";
import { toast } from "react-toastify";

import api from "../../../services/api";
import history from "../../../services/history";

import { signInSuccess, signFailure } from "./actions";

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, "sessions", { email, password });
    const { token, user } = response.data;

    api.defaults.headers["Authorization"] = `Bearer ${token}`;
    yield put(signInSuccess(token, user));

    history.push("/dashboard");
  } catch (err) {
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { username, email, password } = payload;

    yield call(api.post, "users", { username, email, password });

    toast.success("Conta criada com sucesso. Faça login na aplicação");
    history.push("/signin");
  } catch (err) {
    toast.error("Erro ao tentar criar conta.");
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push("/");
}

export default all([
  takeLatest("persist/REHYDRATE", setToken),
  takeLatest("@auth/SIGN_IN_REQUEST", signIn),
  takeLatest("@auth/SIGN_UP_REQUEST", signUp),
  takeLatest("@auth/SIGN_OUT", signOut),
]);
