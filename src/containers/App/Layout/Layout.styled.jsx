import styled from 'styled-components';

export const StyledHeader = styled.div`
    margin-bottom: 20px;
    padding: 0px 50px;
    border: 0px;
    border-bottom: 1px;
    border-style: solid;
    border-color: black;
    display: flex;
    justify-content: space-between;
`;

export const LinkingWrapper = styled.div`
    display: flex;
    justify-content: center;

    li {
        padding: 10px;
        width: 125px;
        text-align: center;
        border-radius: 50px;
        margin: 0 16px;
    }
`;

export const UserWrapper = styled.div`
    display: flex;
    align-items: center;
    margin-right: 50px;
`