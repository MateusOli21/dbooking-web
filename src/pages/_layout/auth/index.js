import React from "react";

import Header from "../../../components/Header";

import { Wrapper } from "../../../styles/global";

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Header isAuth={true} />
      {children}
    </Wrapper>
  );
}
