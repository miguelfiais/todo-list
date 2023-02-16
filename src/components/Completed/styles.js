import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    position: relative;
`

export const Button = styled.button`
    margin-top: 32px;
    position: absolute;
    right: 10px;
    width: 124px;
    height: 40px;
    background: #EB5757;
    border-radius: 4px;
    border: none;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 15px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    svg{
        width: 15px;
        height: auto;
    }
`