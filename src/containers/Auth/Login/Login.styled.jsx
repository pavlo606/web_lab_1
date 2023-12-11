import styled from "styled-components";

export const LoginWrapper = styled.div`
    width: 600px;
    margin: 100px auto;
    padding: 20px;
    border: 1px solid gray;
    font-size: 1.2rem;

    button {
        font-size: 1.2rem;
        height: 100%;
    }

    form {
        display: flex;
        flex-direction: column;
    }

    h2 {
        margin: 0;
    }

    a {
        margin-bottom: 30px;
        text-decoration: none;
        color: #026bfd;
        font-weight: 600;
        text-align: center;
    }
`

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    > div {
        display: flex;
        flex-direction: column;
        /* margin-bottom: 40px; */
        margin: 20px 0;
    }

    input {
        font-size: 1.2rem;
        padding: 2px 5px;
        border-width: 0;
        border-bottom: 1px solid black;
    }

    input:hover {
        border-width: 0;
        border-bottom: 2px solid black;
        padding-bottom: 1px;
    }

    input:focus  {
        border-width: 0;
        border-bottom: 1px solid black;
        padding-bottom: 2px;
    }

    .input_error {
        color: #a70000;
    }
`