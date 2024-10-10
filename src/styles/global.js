import { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`

    &:root{
        font-size: 62.5%;
        font-family: 'Roboto Slab', 'Roboto', system-ui;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_700};
        
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.6rem;
    }

    a{
        text-decoration: none;
    }

    button{
        font-family: "Roboto", system-ui;
    }

    button, a {
      cursor: pointer;
      font-family: "Roboto Slab", system-ui;
      transition: filter 0.3s;
    }

    button:hover, a:hover{
    filter: brightness(0.9);
}

`