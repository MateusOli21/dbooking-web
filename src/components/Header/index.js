import React from "react";
import { useLocation } from "react-router-dom";

import Logo from "../../assets/logo.svg";

import {
  Wrapper,
  LogoContainer,
  NavContainer,
  NavOption,
  NavButton,
} from "./styles";

export default function Header({ isAuth }) {
  const location = useLocation();

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
            <NavButton to="/">Sair</NavButton>
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
