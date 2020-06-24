import React from "react";

import Logo from "../../assets/logo.svg";

import {
  Wrapper,
  LogoContainer,
  NavContainer,
  NavOption,
  NavButton,
} from "./styles";

export default function Header({ isAuth }) {
  return (
    <Wrapper isAuth={isAuth}>
      <LogoContainer>
        <img src={Logo} alt="logo" />
      </LogoContainer>
      <NavContainer>
        {isAuth ? (
          <>
            <NavOption>Home</NavOption>
            <NavOption>Reserva</NavOption>
            <NavOption>Delivery</NavOption>
            <NavOption>
              <NavButton>Sair</NavButton>
            </NavOption>
          </>
        ) : (
          <NavButton>Entrar</NavButton>
        )}
      </NavContainer>
    </Wrapper>
  );
}
