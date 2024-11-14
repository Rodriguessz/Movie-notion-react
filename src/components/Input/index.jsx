import { Container } from './styles'


export const Input = ({icon : Icon, visible = true, ...rest}) => {
    return(
        <>  
            <Container visible={String(visible)}>
                {Icon && <Icon />}
                <input {...rest} />
            </Container>
        </>
    )
}