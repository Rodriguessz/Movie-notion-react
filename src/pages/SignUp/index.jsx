import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { api } from '../../services/api'

import { Container, Form, Background } from "./styles"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { ButtonText } from "../../components/ButtonText"

import { FiLock, FiMail, FiUser, FiArrowLeft } from 'react-icons/fi'

export const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()


    async function handleSignUp(){

        if(!name || !email || !password){
            return alert("Please, fill all the fields correctly!");
        }

        try{
            await api.post("/users/create", { name , email ,password})
            alert("Account successfuly created!")
            navigate("/");
        }catch(error){
            if(error.response){
                alert(error.response.data.message);
            }else{
                alert("Failed to create account!")
            }
        }
    }

    return(
        <>
            <Container>

                <Background />
                
                <Form>
                    <h1>RocketMovies</h1>
                    <p>Aplicação para acompanhar tudo que assistir.</p>

                    <h2>Crie sua conta</h2>
                    
                    <div>
                        <Input icon={FiUser} placeholder="Nome" onChange={e => setName(e.target.value)}/>
                        <Input icon={FiMail} placeholder="E-mail" onChange={e => setEmail(e.target.value)}/>
                        <Input icon={FiLock} placeholder="Senha" onChange={e => setPassword(e.target.value)}/>
                    </div>

                    <Button title="Cadastrar" type="button" onClick={handleSignUp} />

                    <ButtonText icon={FiArrowLeft} title="Voltar para o login" to="/" />

                </Form>

                
            </Container>
        </>
    )
}