import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    display: flex;
    gap: 25px;
    margin-bottom: 32px;
    input{
        height: 56px;
        width: 80%;
        border: 1px solid #BDBDBD;
        border-radius: 12px;
        padding-left: 12px;
        outline: none;
    }
    button{
        width: 20%;
        height: 56px;
        background: #2F80ED;
        box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4);
        border-radius: 12px;
        border: none;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        color: #FFFFFF;
    }
`