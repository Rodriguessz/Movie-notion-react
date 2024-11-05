import styled from 'styled-components';
import { Link } from 'react-router-dom'


export const Container = styled(Link)`

    display: flex;
    align-items: center;
    gap: .8rem;
    width: 5%;

    color: ${({theme}) => theme.COLORS.RED};

`