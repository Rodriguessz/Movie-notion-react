import styled from "styled-components";

export const Container = styled.div`

    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 11.6rem 11.6rem auto;
    grid-template-areas: 
    "header"
    "title"
    "content"
    ;

    > main {
        grid-area: content;

        width: 100%;
        
        padding: 0 12.3rem;

        overflow-y: auto;
    }


`


export const Title = styled.div`

    grid-area: title;

    height: 11.6rem;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0 12.3rem;

    > h1 {
        font-size: 3.2rem;
        font-weight: 500;
        width: 100%;
    }

    > div {
        width: 20.7rem;
    }

`