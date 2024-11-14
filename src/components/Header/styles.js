import styled from 'styled-components';


export const Container = styled.header`

    grid-area: header;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;
    
    height: 11.6rem;

    padding: 0 12.3rem;

    border-bottom: 1px solid ${({theme}) => theme.COLORS.GRAY_300};

    > h2 {

        font-weight: bold;
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.RED};
        
    }

`


export const Profile = styled.div`

    min-width: 20rem;
    display: flex;
    
    gap: .8rem; 
    font-size: 1.4rem;

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;

        > button {
            align-self: flex-start;
            color: ${({theme}) => theme.COLORS.GRAY_100};  
            border: none;
            background: transparent;
            font-size: 1.4rem;
        }
    }

     > a {
        
        img {
            border-radius: 50%;
            width: 6.4rem;
            height: 6.4rem;
        }
        
    }

   

`