import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --color_white:#E1E1E6;
    --color_logo:#8252DA;
  }

  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }
  html,body,#root{
    width: 100%;
    height: 100%;

    font-family: 'Roboto', sans-serif;

    background-color:#121214;

    padding: 30px 50px ;

  }


`;
