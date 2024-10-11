import { Container, Form, Avatar } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'


import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'


export const Profile = () => {
    return (
        <>
            <Container>
                <header>
                    <ButtonText to="/" icon={FiArrowLeft} title="voltar" />
                </header>

                <Form>

                    <Avatar>
                        <img src="https://github.com/rodriguessz.png" alt="Foto do usuário" />

                        <label htmlFor="avatar"> <FiCamera /></label>
                        <input type="file" id='avatar'/>
                    </Avatar>

                    <Input type="text" value="Enzo Rodrigues" placeholder="Nome" icon={FiUser} />
                    <Input type="text" value="enzo.orodrigues03@gmail.com" placeholder="E-mail" icon={FiMail} />

                    <Input type="text" placeholder="Senha Atual" icon={FiLock} />
                    <Input type="text" placeholder="Nova Senha" icon={FiLock} />

                    <Button type="button" title="Salvar" />


                </Form>
            </Container>
        </>
    )
}