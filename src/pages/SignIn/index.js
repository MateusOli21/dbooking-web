import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signInRequest } from "../../store/modules/auth/actions";

import {
  Wrapper,
  LoginContainer,
  Form,
  PageTitle,
  InputLabel,
  InputField,
  SignInButton,
  SignUpOption,
} from "./styles";

export default function SignIn() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = formData;

    dispatch(signInRequest(email, password));
  }

  return (
    <Wrapper>
      <LoginContainer>
        <PageTitle>Entrar</PageTitle>

        <Form onSubmit={handleSubmit}>
          <InputLabel htmlFor="email">E-mail</InputLabel>
          <InputField
            type="email"
            name="email"
            id="email"
            onChange={handleInputChange}
          />

          <InputLabel htmlFor="password">Senha</InputLabel>
          <InputField
            type="password"
            name="password"
            id="password"
            onChange={handleInputChange}
          />

          <SignInButton type="submit">Entrar</SignInButton>
        </Form>
        <SignUpOption to="/signup">Ainda não possuo conta</SignUpOption>
      </LoginContainer>
    </Wrapper>
  );
}
