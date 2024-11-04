import { useState } from 'react'

import { useAuth } from '../../hooks/authentication'

import { Container, Form, Avatar } from './styles'

import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'

import { FiArrowLeft, FiLock, FiMail, FiUser, FiCamera } from 'react-icons/fi'

import avatarPlaceHolder from '../../assets/svg/avatar_placeholder.svg'
import { api } from '../../services/api'


export const Profile = () => {

    //Gets the user and the updateProfile method sent through the AuthProvider;
    const { user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder; 

    const [avatarFile, setAvatarFile] = useState(null)
    const [avatarPreview, setAvatarPreview] = useState(avatarUrl)

 
   
    function handleAvatarChange(e){

        //Gets the file sent by the user
        const avatarFile = e.target.files[0];
        setAvatarFile(avatarFile);
        
        //Change the preview image;
        const avatarPreviewUrl = URL.createObjectURL(avatarFile);
        setAvatarPreview(avatarPreviewUrl)
    }
    
   

    return (
        <>
            <Container>
                <header>
                    <ButtonText to="/" icon={FiArrowLeft} title="voltar" />
                </header>

                <Form>

                    <Avatar>
                        <img src={avatarPreview} alt="Foto do usuário" />

                        <label htmlFor="avatar"> <FiCamera /></label>
                        <input type="file" id='avatar' onChange={handleAvatarChange}/>
                    </Avatar>

                    <Input type="text"  placeholder="Nome" icon={FiUser} />
                    <Input type="text"  placeholder="E-mail" icon={FiMail} />

                    <Input type="text" placeholder="Senha Atual" icon={FiLock} />
                    <Input type="text" placeholder="Nova Senha" icon={FiLock} />

                    <Button type="button" title="Salvar" />


                </Form>
            </Container>
        </>
    )
}