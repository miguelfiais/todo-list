import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
        list-style: none;
    }
    button{
        cursor: pointer;
    }
    button:hover{
        opacity: 0.8;
    }
    button:active{
        opacity: 0.6;
    }
`