import React from "react";
import { useDispatch } from "react-redux";

import { useLocation } from "react-router-dom";

import { signOut } from "../../store/modules/auth/actions";

import Logo from "../../assets/logo.svg";

import {
  Wrapper,
  LogoContainer,
  NavContainer,
  NavOption,
  NavButton,
  LogOutButton,
} from "./styles";

export default function Header({ isAuth }) {
  const location = useLocation();
  const dispatch = useDispatch();

  function handleLogOut() {
    dispatch(signOut());
  }

  return (
    <Wrapper isAuth={isAuth}>
      <LogoContainer to="/">
        <img src={Logo} alt="logo" />
      </LogoContainer>

      <NavContainer>
        {isAuth ? (
          <>
            <NavOption to="/dashboard" isfixed="true">
              Home
            </NavOption>
            <NavOption to="/booking">Reserva</NavOption>
            <NavOption to="/delivery">Delivery</NavOption>
            <LogOutButton onClick={handleLogOut}>Sair</LogOutButton>
          </>
        ) : (
          <NavButton
            to={location.pathname === "/signin" ? "/signup" : "/signin"}
          >
            {location.pathname === "/signin" ? "Criar conta" : "Entrar"}
          </NavButton>
        )}
      </NavContainer>
    </Wrapper>
  );
}
