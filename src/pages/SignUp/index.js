import React from "react";

import {
  Wrapper,
  LoginContainer,
  PageTitle,
  InputLabel,
  InputField,
  SignUpButton,
  SignUpOption,
} from "./styles";

export default function SignUp() {
  return (
    <Wrapper>
      <LoginContainer>
        <PageTitle>Criar conta</PageTitle>
        <InputLabel>Nome</InputLabel>
        <InputField type="text" />

        <InputLabel>E-mail</InputLabel>
        <InputField type="email" />

        <InputLabel>Senha</InputLabel>
        <InputField type="password" />

        <SignUpButton>Criar conta</SignUpButton>
        <SignUpOption to="/signin">Já possuo conta</SignUpOption>
      </LoginContainer>
    </Wrapper>
  );
}
