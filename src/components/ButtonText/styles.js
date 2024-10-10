import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled.a`

    display: flex;
    align-items: center;
    gap: .8rem;

    color: ${({theme}) => theme.COLORS.RED};

`