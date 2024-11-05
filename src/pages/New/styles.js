import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    "header"
    "content";

    > main {
        grid-area: content;
        padding: 4rem 12.3rem 0;
        overflow-y: auto;
    }


`

export const Form = styled.form`

    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    margin-top: 2.4rem;

    > div {
        display: flex;
        gap: 4rem;
    }

    > div.actions {

        > button {
            width: 30%;
        }
    }

`


export const Marcadores = styled.div`


    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.4rem !important;
    
    > h2 {
        font-size: 2.6rem;
    }

    > div {
        background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        padding: 1.6rem;

        border-radius: 1rem;

        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.6rem
    }




`

export const Actions = styled.div`



`