import produce from "immer";

const INITIAL_STATE = {
  token: null,
  signed: false,
  user: [],
  loading: true,
};

export default function auth(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "@auth/SIGN_IN_REQUEST":
      return produce(state, (draft) => {
        draft.loading = true;
      });

    case "@auth/SIGN_IN_SUCCESS":
      return produce(state, (draft) => {
        draft.token = action.payload.token;
        draft.user = action.payload.user;
        draft.signed = true;
        draft.loading = false;
      });

    case "@auth/SIGN_FAILURE":
      return produce(state, (draft) => {
        draft.loading = false;
      });

    case "@auth/SIGN_OUT":
      return produce(state, (draft) => {
        draft.token = null;
        draft.user = [];
        draft.signed = false;
        draft.loading = false;
      });

    default:
      return state;
  }
}
