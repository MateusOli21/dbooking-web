import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { SignUpRequest } from "../../store/modules/auth/actions";

import {
  Wrapper,
  LoginContainer,
  PageTitle,
  Form,
  InputLabel,
  InputField,
  SignUpButton,
  SignUpOption,
} from "./styles";

export default function SignUp() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const { username, email, password } = formData;

    dispatch(SignUpRequest(username, email, password));
  }

  return (
    <Wrapper>
      <LoginContainer>
        <PageTitle>Criar conta</PageTitle>

        <Form onSubmit={handleSubmit}>
          <InputLabel htmlFor="username">Nome</InputLabel>
          <InputField
            type="text"
            name="username"
            id="username"
            onChange={handleInputChange}
          />

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

          <SignUpButton type="submit">Criar conta</SignUpButton>
        </Form>

        <SignUpOption to="/signin">Já possuo conta</SignUpOption>
      </LoginContainer>
    </Wrapper>
  );
}
