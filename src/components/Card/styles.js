import styled from 'styled-components';


export const Container = styled.button`

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
    width: 100%;

    padding: 3.2rem;

    background-color: ${({theme}) => theme.COLORS.RED_05};

    border: 0;
    border-radius: 1rem;

    margin-bottom: 1.6rem;

    > h2 {
        font-size: 2.4rem;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    > p{
        font-family: 'Roboto', serif;
        color: ${({theme}) => theme.COLORS.GRAY_100};
        text-align: justify;
        margin-bottom: .8rem;
    }

`

export const Rating = styled.div`

    width: 100%;
    
    display: flex;
    align-items: center;
    gap: .6rem;

    color: ${({theme}) => theme.COLORS.RED};
 

`