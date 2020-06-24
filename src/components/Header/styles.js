import styled from "styled-components";
import { Link } from "react-router-dom";

import { theme } from "../../styles/global";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
  background: ${({ isAuth }) => (isAuth ? theme.primaryLight : "transparent")};

  @media (min-width: 620px) {
    padding: 1.75rem 4rem;
  }
`;

export const LogoContainer = styled(Link)``;

export const NavContainer = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavOption = styled.li`
  color: ${theme.white};
  margin-left: 1rem;
  font-weight: 700;
`;

export const NavButton = styled(Link)`
  padding: 0.4rem 1.2rem;
  border: 0;
  border-radius: 5px;
  background: ${theme.primary};
  color: ${theme.white};
  font-weight: 700;
  margin-left: 0.25rem;

  &:hover {
    background: ${theme.primaryDark};
  }
`;
