import { Container } from "./styles";


export const Button = ({ icon: Icon, title, isDelete, ...rest}) => {

    return(
        <>
            <Container $isdelete={isDelete} {...rest}>
                {Icon && <Icon />}
                {title}
            </Container>
        </>
    )

}