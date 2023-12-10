import styled from "styled-components";

export const CartContainer = styled.div`
    font-size: 1.5em;

    > p {
        margin: 30px 100px;
        display: flex;
        justify-content: flex-end;
    }

    h3 {
        text-align: center;
    }
`

export const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 0 100px;

    button {
        font-size: 1rem;
        height: 100%;
    }
`