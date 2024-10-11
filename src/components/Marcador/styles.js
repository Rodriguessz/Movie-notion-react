import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    align-items: center;
    gap: 1.6rem;
    
    padding: 0 1.6rem;

    background-color: ${({theme, $isnew}) => $isnew ? "transparent" : theme.COLORS.BACKGROUND_700};
    border: ${({theme, $isnew}) => $isnew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 1rem;

    max-width: 18rem;

    > input {
        border: none;
        background: transparent;
        height: 5.6rem;
        width: 100%;

        color: ${({theme}) => theme.COLORS.WHITE};

        &:focus{
            border: none;
            outline: none;
        }
    }

    > button{
        border: none;
        background: transparent;

        svg {
         color: ${({theme}) => theme.COLORS.RED};
         font-size: 2rem
         }
    }

    

`