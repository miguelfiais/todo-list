import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    padding-top: 32px;
    h1{
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 42px;
        text-align: center;
        letter-spacing: -0.045em;
        color: #333333;
        margin-bottom: 58px;
    }
    ul{
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-items: center;
        list-style: none;
        border-bottom: 1px solid #BDBDBD;
        margin-bottom: 20px;
        li{
            padding: 10px;
            border-bottom: 4px solid #2F80ED;
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #333333;
        }
    }
`