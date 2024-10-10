import { Container } from './styles'


export const Input = ({icon : Icon, ...rest}) => {
    return(
        <>  
            <Container>
                {Icon && <Icon />}
                <input {...rest} />
            </Container>
        </>
    )
}