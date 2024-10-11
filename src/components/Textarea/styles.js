import styled from "styled-components";


export const Container = styled.textarea`

    width: 100%;
    height: 27.4rem;

    padding: 1.6rem ;

    border: 2px solid transparent;
    border-radius: 1rem;

    font-family: 'Roboto', system-ui;


    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    color: ${({theme}) => theme.COLORS.WHITE};

    resize: none;

    &::placeholder{
        color: ${({theme}) => theme.COLORS.GRAY_100};
        font-size: 1.4rem;
    }

    &:focus{
        outline: none;
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};

    }

    


`