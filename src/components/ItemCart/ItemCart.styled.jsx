import styled from "styled-components";

export const ItemWrapper = styled.div`
    display: flex;
    /* font-size: 1.5em; */
    align-items: center;
    justify-content: space-between;
    border: 1px solid black;
    margin: 0 100px;
    padding-left: 20px;
    height: 150px;

    > div {
        height: 100%;
        display: flex;
        align-items: center;
    }

    img {
        height: 100%;
    }

    a {
        text-decoration: none;
        color: black;
        font-size: 1em;
        margin-left: 50px;
        max-width: 50ch;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
`

export const Counter = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
    
`

export const PriceWrapper = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
`

export const PriceButtonWrapper = styled.div`
    width: 25%;

    > button {
        color: red;
        font-weight: 800;
        font-size: 0.9rem;
    }
`