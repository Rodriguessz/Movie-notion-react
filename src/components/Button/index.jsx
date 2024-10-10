import { Container } from "./styles";


export const Button = ({ icon: Icon, title, ...rest}) => {

    return(
        <>
            <Container {...rest}>
                {Icon && <Icon />}
                {title}
            </Container>
        </>
    )

}