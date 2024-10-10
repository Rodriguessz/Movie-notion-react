import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi'

export const SignUp = () => {
    return(
        <>
            <Container>

                <Background />
                
                <Form>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>

                    <h2>Crie sua conta</h2>
                    
                    <Input icon={FiUser} placeholder="Nome"/>
                    <Input icon={FiMail} placeholder="E-mail"/>
                    <Input icon={FiLock} placeholder="Senha"/>

                    <Button title="Cadastrar" type="button" />

                    <ButtonText icon={FiArrowLeft} title="Voltar para o login" />

                </Form>

                
            </Container>
        </>
    )
}