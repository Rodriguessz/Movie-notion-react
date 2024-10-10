import { Container } from './styles';

export const ButtonText = ({icon: Icon, title, ...rest}) => {
    return(
        <>
            <Container {...rest}>
                {Icon && <Icon />}
                {title}
            </Container>
        </>
    )
}