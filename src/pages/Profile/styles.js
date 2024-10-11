import styled from "styled-components";


export const Container = styled.div`

    width: 100%;
    height: 100vh;

    > header {
        padding: 6.4rem 14.4rem;
        background-color: ${({theme}) => theme.COLORS.RED_05};
    }
   

`

export const Form = styled.form`

    max-width: 34rem;
    margin: 10rem auto 0;

    gap: 2.4rem;


    > div:nth-child(4){
        margin-top: 2.4rem;
    }

    > div:nth-child(3), div:nth-child(5) {
        margin-top: 1.6rem;
    }

`


export const Avatar = styled.div`

    width: 18.6rem;
    height: 18.6rem;

    position: relative;

    margin: -16rem auto 6.4rem ;
   

    > img {
        width: 18.6rem;
        height: 18.6rem;

        border-radius: 50%;
    }

    > label {
        display: flex;

        position: absolute;
        bottom: .7rem;
        right: .7rem;

        padding: 1.4rem;
        background-color: ${({theme}) => theme.COLORS.RED};
        border-radius: 50%;
        
        cursor: pointer;

        svg {
            color: ${({theme}) => theme.COLORS.GRAY_300};
            font-size: 2rem;
        }
    }

    > input  {
        display: none;

    }

    

`