import styled from 'styled-components'


export const Container = styled.div`

    display: ${({visible}) => visible == "true" ? "flex" : "none"};
    align-items: center;
    gap: 1.2rem;

    width: 100%;
    
   /*  margin-bottom: 1.6rem; */
    padding: 0 1.6rem;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800 };

    border-radius: 1rem;
    border: 2px solid transparent;
    
    color: ${({theme}) => theme.COLORS.GRAY_100};
    
    &:focus-within{
        border: 2px solid ${({theme}) => theme.COLORS.GRAY_300};
    }

    > input {
        width: 100%;
        height: 5.6rem;

        background: transparent;
        border: 0;
        color: ${({theme}) => theme.COLORS.WHITE};

        &::placeholder{
            color: ${({theme}) => theme.COLORS.GRAY_100};
            font-family: 'Roboto', system-ui;
            font-size: 1.4rem;
        }

        &:focus{
            border: 0;
            outline: 0;
        }

        &:disabled{
            opacity: 50%;
            cursor: not-allowed;
        }
        
    }

    > svg {
        font-size: 1.6rem;
    }

`