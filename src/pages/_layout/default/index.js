import React from "react";

import Header from "../../../components/Header";

import { Wrapper } from "../../../styles/global";

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header isAuth={false} />
      {children}
    </Wrapper>
  );
}
