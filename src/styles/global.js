import "react-toastify/dist/ReactToastify.css";
import styled, { createGlobalStyle } from "styled-components";

export const theme = {
  primary: "#ea4c4c",
  primaryLight: "#f25c5c",
  primaryDark: "#c14545",
  secondary: "#0e2431",
  secondaryLight: "#193647",
  secondaryDark: "#081b26",
  white: "#f9f9f9",
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus {
  outline: 0;
}

html,
body,
#root {
  width: 100%;
  height: 100%;
}

body {
  -webkit-font-smoothing: antialiased;
}

body,
input,
button {
  font: 16px 'Montserrat', sans-serif;
}

a {
  text-decoration: none;
}

ul {
  list-style: none;
}

button {
  cursor: pointer;
}

`;
