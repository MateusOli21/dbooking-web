import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../styles/global";

export const Wrapper = styled.div`
  padding: 0 2rem;

  @media (min-width: 680px) {
    padding: 0 4rem;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (min-width: 1150px) {
    justify-content: space-between;
  }
`;

export const PageTitle = styled.h1`
  font-size: 25px;
  margin: 2rem 0 1.5rem;
  color: ${theme.secondaryDark};

  @media (min-width: 680px) {
    margin: 3rem 0 2rem;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  margin-bottom: 1.5rem;
`;

export const InputLabel = styled.label`
  color: ${theme.secondaryDark};
  margin-bottom: 0.75rem;
  font-weight: bolder;
`;

export const ResumeText = styled.span`
  color: ${theme.secondaryDark};
  margin-bottom: 0.25rem;
`;

export const DatePicker = styled.input`
  margin: 0rem 0 1.5rem;
  border: 0;
  border-radius: 5px;
  padding: 0.55rem 1rem;
  color: ${theme.white};
  background: ${theme.primary};

  @media (min-width: 760px) {
    margin: 0rem 0 2rem;
  }
`;

export const HourContainer = styled.div`
  margin: 0rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
`;

export const Hour = styled.div`
  width: 100%;
  max-width: 80px;
  text-align: center;
  padding: 0.8rem 0;
  margin: 0 0 0.5rem;
  margin-right: 0.5rem;
  border-radius: 5px;
  background: ${({ selected }) =>
    selected ? theme.primaryDark : theme.primary};

  &:hover {
    cursor: pointer;
    background: ${theme.primaryLight};
  }

  @media (min-width: 520px) {
    max-width: 95px;
  }
`;

export const HoutText = styled.span`
  color: ${theme.white};
`;

export const TableContainer = styled.div`
  width: 100%;
  max-width: 480px;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    max-width: 520px;
  }
`;

export const Tables = styled.div`
  max-width: 540px;
  height: 320px;
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  gap: 0.5rem;

  padding: 2.5rem 1.25rem 0;
  border-radius: 5px;
  border: 1px solid ${theme.primary};

  @media (min-width: 450px) {
    padding: 2rem 3rem 0;
  }
`;

export const Table = styled.img`
  max-width: 65px;
  opacity: ${({ available }) => (available ? 1 : 0.5)};
  pointer-events: ${({ available }) => (available ? "auto" : "none")};

  &:hover {
    cursor: ${({ available }) => (available ? "pointer" : "default")};
  }

  @media (min-width: 520px) {
    max-width: 80px;
  }
`;

export const ButtonsContainer = styled.div`
  margin: 1.25rem 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const PrimaryButton = styled.button`
  padding: 0.7rem 1rem;
  background: ${theme.primary};
  border-radius: 5px;
  border: 0;
  color: ${theme.white};
  font-weight: 700;
  margin-left: 0.75rem;

  &:hover {
    background: ${theme.primaryLight};
  }
`;

export const SecondaryButton = styled(Link)`
  padding: 0.7rem 1rem;
  border: 1px solid ${theme.secondaryDark};
  border-radius: 5px;
  font-weight: 700;
  color: ${theme.secondaryDark};
`;
