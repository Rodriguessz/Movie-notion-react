import styled from "styled-components";
import backgroundImage from '../../assets/images/background.png'

export const Container = styled.div`

    height: 100vh;
    
    display: flex;
    align-items: stretch;

`


export const Form = styled.form`

    display: flex;
    justify-content: center;
    flex-direction: column;

    padding: 0 13.4rem;

    > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem
    }

    > h1 {
        color: ${({theme}) => theme.COLORS.RED};
        font-size: 4rem;
        font-weight: 700;

        margin-bottom: .8rem;
    }

    > p {
        color: ${({theme}) => theme.COLORS.GRAY_200};
        font-size: 1.4rem;
    }

    > h2 {
        margin: 4.8rem 0;
        
        font-weight: 500;
        font-size: 2.4rem;
    }

    > a { 
        
        margin: 0 auto;
    }



`

export const Background = styled.div`

    flex: 1;
    background: url(${backgroundImage});
    background-position: center;
    background-size: cover;

    

`