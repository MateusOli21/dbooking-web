import React from "react";

import BookingImg from "../../assets/booking.svg";
import DeliveryImg from "../../assets/delivery.svg";

import {
  Wrapper,
  PageTitle,
  ImgContainer,
  ImgCard,
  Img,
  ImgTitle,
} from "./styles";

export default function Dashboard() {
  return (
    <Wrapper>
      <PageTitle>Você deseja...</PageTitle>

      <ImgContainer>
        <ImgCard>
          <Img src={BookingImg} alt="booking" />
          <ImgTitle>Fazer uma reserva</ImgTitle>
        </ImgCard>

        <ImgCard>
          <Img src={DeliveryImg} alt="delivery" />
          <ImgTitle>Fazer uma reserva</ImgTitle>
        </ImgCard>
      </ImgContainer>
    </Wrapper>
  );
}
