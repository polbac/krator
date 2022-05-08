import styled from "styled-components";

export const Button = styled.button`
    background: blue;
    cursor: pointer;
    padding: 10px 20px;
    color: white;
    border: 0;
    transform: skewX(${Math.random() * 30}deg);
    transition: 0.33s all;
    &:hover{
        background: black;
        filter: blur(1px);
        transform: scale(0.9);
    }
`