import React from "react";

import {
  Wrapper,
  LoginContainer,
  PageTitle,
  InputLabel,
  InputField,
  SignInButton,
  SignUpOption,
} from "./styles";

export default function SignIn() {
  return (
    <Wrapper>
      <LoginContainer>
        <PageTitle>Entrar</PageTitle>
        <InputLabel>E-mail</InputLabel>
        <InputField type="email" />

        <InputLabel>Senha</InputLabel>
        <InputField type="password" />

        <SignInButton>Entrar</SignInButton>
        <SignUpOption to="/signup">Ainda não possuo conta</SignUpOption>
      </LoginContainer>
    </Wrapper>
  );
}
