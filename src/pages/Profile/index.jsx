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
    const { user, updateProfile } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder; 

    const [avatarFile, setAvatarFile] = useState(null)
    const [avatarPreview, setAvatarPreview] = useState(avatarUrl)

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");



    function handleAvatarChange(e){

        //Gets the file sent by the user
        const avatarFile = e.target.files[0];
        setAvatarFile(avatarFile);
        
        //Change the preview image;
        const avatarPreviewUrl = URL.createObjectURL(avatarFile);
        setAvatarPreview(avatarPreviewUrl)
    }

    async function handleUpdateProfile(){

        const updatedUserInfos = {
            name,
            email, 
            password,
            newPassword, 
        }

        //JOin the two objects;
        const updatedUser = Object.assign(user, updatedUserInfos)

        await updateProfile({user: updatedUser, avatarFile: avatarFile})

        setPassword("")
        setNewPassword("")

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

                    <Input type="text" defaultValue={name} placeholder="Nome" icon={FiUser} onChange={e => setName(e.target.value)} />
                    <Input type="text" defaultValue={email} placeholder="E-mail" icon={FiMail} onChange={e => setEmail(e.target.value)}/>

                    <Input type="text" placeholder="Senha Atual" icon={FiLock} value={password} onChange={e => setPassword(e.target.value)} />
                    <Input type="text" placeholder="Nova Senha" icon={FiLock}  value={newPassword} onChange={e => setNewPassword(e.target.value)} />

                    <Button type="button" title="Salvar" onClick={handleUpdateProfile} disabled={!password && newPassword} />


                </Form>
            </Container>
        </>
    )
}