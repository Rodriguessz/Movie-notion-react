import styled from "styled-components";

export const Container = styled.button`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    border: none;
    border-radius: 1rem;

    background-color: ${({theme}) => theme.COLORS.RED};

    font-size: 1.6rem;
    font-weight: 500;
    color: ${({theme}) => theme.COLORS.GRAY_300};

    padding: 1.6rem;

    margin: 2.4rem 0;

    &:disabled{
        opacity: 50%;
        cursor: not-allowed;
    }



`