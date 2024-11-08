import { useEffect, useState} from "react";

import { api } from '../../services/api';

import { Container, Title } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"

import { FiPlus } from 'react-icons/fi'
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchMovies(){
            const { data } = await api.get("/movies");
            setMovies(data);
            console.log(data)

        }

        fetchMovies();
    }, [])

    return(
        <>
            <Container>
                <Header />

                <Title>
                    <h1>Meus Filmes</h1>
                    
                    <div>
                        <Link to="/new">
                            <Button icon={FiPlus} title="Adicionar"/>
                        </Link>
                    </div>
                
                </Title> 

                {movies.length > 0 &&
                    <main>
                    {
                        movies.map(movie => <Card  key={String(movie.id)} data={movie} type="button"/>)
                    }
        
                    </main>

                }
                
            </Container>
        </>
    )
}