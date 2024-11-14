import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../../hooks/authentication'

import { api } from '../../services/api'

import { Container, Title, Tags, Description } from './styles'

import { Header } from "../../components/Header"
import { ButtonText } from "../../components/ButtonText"
import { Tag } from "../../components/Tag"


import { FiArrowLeft, FiClock } from 'react-icons/fi'
import { RiStarFill, RiStarLine } from 'react-icons/ri'

import avatarPlaceHolder from '../../assets/svg/avatar_placeholder.svg'


export const Details = () => {

    const params = useParams()
    const { user } = useAuth();

    const userAvatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceHolder;
    const [avatarPreview, setAvatarPreview] = useState(userAvatarUrl);

    const [movie, setMovie] = useState({})

    useEffect(() => {

        async function fetchMovie() {
            try {
                const { data } = await api.get(`/movies/${params.id}`)
                const {created_at} = data 

                const date = new Date(`${created_at.split(" ")[0]} 00:00:00`).toLocaleDateString({language: "pt-br"})
                const hours = created_at.split(" ")[1];
    
                data.date = [date,hours];
                setMovie(data)
    
            } catch (error) {
                if (error.response) {
                    alert(error.response.data.message)
                } else {
                    alert("Failed to load the movie!")
                }
            }


        }

        fetchMovie();
    }, [])
    
    return (
        <>

            <Container>
                <Header visible={false}/>

                <main>
                    <ButtonText to={-1} icon={FiArrowLeft} title="Voltar" />

                    <Title>

                        <div>
                            <h1>{movie.title}</h1>
                            {Array.from({ length: movie.rating }).map((item, index) => <RiStarFill key={index} />)}
                        </div>

                        <div>
                            <span>
                                <img src={avatarPreview} alt="Foto do usuário" />
                                <p>Por {user.name}</p>
                            </span>

                            <span>
                                <FiClock />
                                {movie.date && <p>{movie.date[0]} às {movie.date[1]}</p> }
                                
                            </span>
                        </div>
                        {
                            movie.tags &&
                            <Tags>
                                {movie.tags.map((tag, index) => <Tag title={tag} key={index} />)}
                            </Tags>
                        }

                    </Title>

                    <Description>

                        <p>
                            {movie.description}
                        </p>
                    </Description>

                </main>
            </Container>

        </>
    )
}