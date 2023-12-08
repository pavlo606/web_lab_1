import styled from "styled-components";

export const StyledCheckout = styled.div`
    font-size: 1.2rem;

    h2 {
        text-align: center;
    }

    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 80%;
        margin: 0 auto;
    }
`

export const InputWrapper = styled.div`
    width: 100%;
    margin-bottom: 25px;
    
    > div {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin-bottom: 25px;
    }

    > div > div {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    input {
        font-size: 1.2rem;
        width: 100%;
        padding: 10px 2px;
        margin: 8px 0;
        box-sizing: border-box;
        border-radius: 0.5rem;
    }

    .input_error {
        color: #a70000;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-top: 50px;

    button {
        font-size: 1rem;
        height: 100%;
    }
`

export const PaymentWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }

    p {
        font-size: 1.2rem;
    }
    
    select {
        font-size: 1.2rem;
        width: 12rem;
        border-radius: 0.4rem;
        padding: 2px;
        margin: 8px 0;
    }
`