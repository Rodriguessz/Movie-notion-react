import { useState } from "react";

import { useAuth } from "../../hooks/authentication";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";


import { Container, Profile } from "./styles";
import { Input } from '../Input'

import { FiSearch } from 'react-icons/fi'

import { Link } from "react-router-dom";

import avatarPlaceHolder from '../../assets/svg/avatar_placeholder.svg'


export const Header = ({onSearch, ...rest}) => {

    const { signOut, user } = useAuth();
    const naivagate = useNavigate()


    function handleSignOut(){
        signOut();
        naivagate("/");
    }

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder; 

    const [avatarPreview, setAvatarPreview] = useState(avatarUrl)

    return (
        <>
            <Container >
                <h2>RocketMovies</h2>

                <Input icon={FiSearch} placeholder="Pesquisar pelo título" onChange={onSearch} {...rest} />

                <Profile>

                    <div>
                        <strong>{user.name}</strong>
                        <button type="button" onClick={handleSignOut}> Sair </button>
                    </div>

                    <Link to="/profile">
                        <img src={avatarPreview} alt="Foto do usuário" />
                    </Link>

                </Profile>

            </Container>
        </>
    )
}