import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiLock, FiMail } from 'react-icons/fi'

export const SignIn = () => {
    return(
        <>
            <Container>
                
                <Form>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>

                    <h2>Faça seu login</h2>
                    
                    <div>
                        <Input icon={FiMail} placeholder="E-mail"/>
                        <Input icon={FiLock} placeholder="Senha"/>
                    </div>
                
                    <Button title="Entrar" type="button" />

                    <ButtonText title="Criar conta" />
                </Form>

                <Background />
            </Container>
        </>
    )
}