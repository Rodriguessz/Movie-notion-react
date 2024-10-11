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
        
        padding: 4rem 12.3rem;
        
        overflow-y: auto;
    }

`


export const Title = styled.div`


    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    > div:nth-child(1){
        margin-top: 2.4rem;
    }

    > div {
        
        display: flex;
        gap: 1.2rem;
        align-items: center;

        h1 {
            font-size: 3.6rem;
            font-weight: 500;
            color: ${({theme}) => theme.COLORS.WHITE};
        
        }
        
        span {
            display: flex;
            align-items: center;
            gap: .8rem;
            
            font-family: 'Roboto', serif;

            > svg {
                color: ${({theme}) => theme.COLORS.RED};
                font-size: 1.6rem;
            }

            img {
                width: 1.6rem;
                border-radius: 50%;
            }
        }

        > svg {
            color: ${({theme}) => theme.COLORS.RED};
            font-size: 1.6rem;
        }

    }


`

export const Tags = styled.section`

    width: 100%;
`

export const Description = styled.div`

    
    margin-top: 4rem;
    text-align: justify;
   
    > p + p {
        margin-top: 2.4rem;
    }

`