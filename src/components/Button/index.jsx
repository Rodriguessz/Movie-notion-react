import { Container } from "./styles";


export const Button = ({ icon: Icon, title, isDelete, ...rest}) => {

    return(
        <>
            <Container type="button" $isdelete={isDelete} {...rest}>
                {Icon && <Icon />}
                {title}
            </Container>
        </>
    )

}