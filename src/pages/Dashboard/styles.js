import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../styles/global";

export const Wrapper = styled.div`
  width: 100%;
  height: 70%;
  padding: 0 2rem;

  @media (min-width: 640px) {
    padding: 0 4rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  max-width: 360px;
`;

export const ImgCard = styled(Link)`
  width: 100%;
  max-width: 440px;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid ${theme.primary};
  border-radius: 5px;
  margin: 1rem 1.25rem;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 1px 3px 5px #c1c1c1;
  }
`;

export const PageTitle = styled.h1`
  font-size: 25px;
  margin: 2.5rem 0 1rem;

  @media (min-width: 680px) {
    margin: 4rem 0 2rem;
  }
`;

export const ImgTitle = styled.span`
  text-align: center;
  margin-top: 1.5rem;
  color: ${theme.secondaryDark};
  font-weight: 700;
`;
