import styled from "styled-components";

import { Link } from "react-router-dom";

export const Container = styled(Link)`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: .8rem;

    border: none;
    border-radius: 1rem;

    background-color: ${({theme, $isdelete}) => $isdelete ? theme.COLORS.BACKGROUND_900 : theme.COLORS.RED};

    color: ${({theme, $isdelete}) => $isdelete ? theme.COLORS.RED : theme.COLORS.GRAY_300};
    font-size: 1.6rem;
    font-weight: 500;

    padding: 1.6rem;

    margin: 2.4rem 0;

    &:disabled{
        opacity: 50%;
        cursor: not-allowed;
    }



`