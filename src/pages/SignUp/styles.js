import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../styles/global";

export const Wrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const LoginContainer = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
  padding: 2rem 1.75rem;
  border-radius: 5px;
  background: ${theme.primary};
`;

export const PageTitle = styled.h1`
  color: ${theme.secondaryDark};
  margin-bottom: 1.5rem;
  color: ${theme.white};
`;

export const InputLabel = styled.label`
  font-weight: 100;
  margin-bottom: 0.25rem;
  color: ${theme.white};
`;

export const InputField = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${theme.primary};
  border-radius: 5px;
  background: ${theme.primaryLight};
  margin-bottom: 1rem;
  color: ${theme.white};
`;

export const SignUpButton = styled.button`
  padding: 0.9rem 0;
  font-weight: 700;
  border: 0;
  border-radius: 5px;
  background: ${theme.secondary};
  color: ${theme.white};

  &:hover {
    background: ${theme.secondaryDark};
  }
`;

export const SignUpOption = styled(Link)`
  margin-top: 1.5rem;
  text-align: center;
  color: ${theme.white};
`;
