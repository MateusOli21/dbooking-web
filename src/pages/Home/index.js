import React from "react";

import DinnerImg from "../../assets/dinner.svg";

import {
  Wrapper,
  ImgContainer,
  Img,
  SloganContainer,
  MainSlogan,
  SubSlogan,
  ButtonsContainer,
  PrimaryButton,
  SecondaryButton,
} from "./styles";

export default function Home() {
  return (
    <Wrapper>
      <SloganContainer>
        <MainSlogan>Não perca tempo esperando pelo seu jantar.</MainSlogan>
        <SubSlogan>
          Agende seu jantar presencialmente de forma rápida e prática ou peça
          pelo delivery.
        </SubSlogan>

        <ButtonsContainer>
          <PrimaryButton to="/signin">Faça login</PrimaryButton>
          <SecondaryButton to="/signup">Criar conta</SecondaryButton>
        </ButtonsContainer>
      </SloganContainer>

      <ImgContainer>
        <Img src={DinnerImg} alt="dinner" />
      </ImgContainer>
    </Wrapper>
  );
}
