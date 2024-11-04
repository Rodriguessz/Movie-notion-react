import { useAuth } from '../../hooks/authentication'

import { Container, Form, Background } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiLock, FiMail } from 'react-icons/fi'
import { useState } from 'react'





export const SignIn = () => {

    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");

    const { signIn } = useAuth();


    function handleSignIn(){
    
        if(!email) alert("Please, fill the fields correctly!")
        
        signIn({email, password})
    }

    return(
        <>
            <Container>
                
                <Form>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>

                    <h2>Faça seu login</h2>
                    
                    <div>
                        <Input icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                        <Input icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                    </div>
                
                    <Button title="Entrar" onClick={handleSignIn} />

                    <ButtonText title="Criar conta" to="/register" />
                </Form>

                <Background />
            </Container>
        </>
    )
}