import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../styles/global";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 2rem;

  @media (min-width: 660px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
  }

  @media (min-width: 1024px) {
    padding: 0 3.5rem;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Img = styled.img`
  width: 280px;
  padding: 2rem 0;

  @media (min-width: 768px) {
    width: 340px;
  }

  @media (min-width: 1080px) {
    width: 440px;
  }

  @media (min-width: 1280px) {
    width: 600px;
  }
`;

export const SloganContainer = styled.div`
  width: 100%;
  margin: 1rem 0 0.5rem;
`;

export const MainSlogan = styled.h1`
  font-size: 32px;
  width: 90%;
  margin-bottom: 0.5rem;
  color: ${theme.secondary};

  @media (min-width: 768px) {
    font-size: 36px;
    width: 95%;
  }

  @media (min-width: 1080px) {
    font-size: 48px;
    width: 90%;
    margin-bottom: 0.75rem;
  }

  @media (min-width: 1250px) {
    width: 80%;
  }
`;

export const SubSlogan = styled.p`
  font-size: 0.85rem;
  width: 75%;
  margin-bottom: 1.75rem;
  color: ${theme.secondary};

  @media (min-width: 768px) {
    width: 65%;
    margin-bottom: 2.25rem;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    width: 70%;
    margin-bottom: 3rem;
  }

  @media (min-width: 1280px) {
    width: 65%;
    margin-bottom: 3rem;
  }
`;

export const ButtonsContainer = styled.div``;

export const PrimaryButton = styled(Link)`
  padding: 0.4rem 0.65rem;
  border: 0;
  margin-right: 0.5rem;
  border-radius: 5px;
  font-weight: 700;
  color: ${theme.white};
  background: ${theme.primary};

  &:hover {
    background: ${theme.primaryDark};
  }

  @media (min-width: 768px) {
    padding: 0.75rem 2rem;
  }
`;

export const SecondaryButton = styled(Link)`
  padding: 0.4rem 0.65rem;
  margin-right: 0.5rem;
  border: 1px solid ${theme.secondary};
  border-radius: 5px;
  font-weight: 700;
  color: ${theme.secondary};
  background: transparent;

  &:hover {
  }

  @media (min-width: 768px) {
    padding: 0.75rem 1.5rem;
  }
`;
