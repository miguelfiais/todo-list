import styled from "styled-components";

export const Container = styled.div`
    width: 98%;
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`
export const ItemList = styled.li`
    position: relative;
    display: flex;
    gap: 10px;
    input{
        width: 20px;
    }
    span{
        max-width: 460px;
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: #000000;
        text-decoration: ${props => props.isCompleted ? 'line-through' : 'none'};
    }
    .to-complete{
        height: 25px;
        width: 25px;
        background: ${props => props.isCompleted ? '#2F80ED' : 'transparent'};
        border: ${props => props.isCompleted ? '1px solid #2F80ED' : '1px solid #828282'};
        border-radius: 4px;
        svg{
            width: 20px;
            height: auto;
            color: #fff;
            display: ${props => props.isCompleted ? 'block' : 'none'};
        }
    }
    .delete, .change{
        background-color: transparent;
        border: none;
        position: absolute;
        right: 0;
        svg{
            width: 25px;
            height: auto;
            color: #BDBDBD;
        }
    }
    .delete{
        display: ${props => props.isVisibleDelete ? 'block' : 'none'};
    }
    .change{
        display: ${props => props.isVisibleDelete ? 'none' : 'block'};
    }
`