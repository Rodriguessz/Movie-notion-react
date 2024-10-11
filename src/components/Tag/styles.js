import styled from "styled-components";

export const Container = styled.span`

    padding: .5rem 1.6rem;

    background-color: ${({theme}) => theme.COLORS.GRAY_300};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    border-radius: 1rem;

    margin-right: .8rem;

    font-size: 1.2rem;
`