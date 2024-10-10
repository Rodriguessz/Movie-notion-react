import { Container, Profile } from "./styles";
import { Input } from '../Input'

import { FiSearch } from 'react-icons/fi'


export const Header = () => {
    return (
        <>
            <Container>
                <h2>RocketMovies</h2>

                <Input icon={FiSearch} placeholder="Pesquisar pelo título" />

                <Profile>

                    <div>
                        <strong>Enzo Rodrigues</strong>
                        <a href="#">Sair</a>
                    </div>

                    <a href="#">
                    <img src="https://github.com/rodriguessz.png" alt="Foto do usuário" />
                    </a>

                </Profile>

            </Container>
        </>
    )
}