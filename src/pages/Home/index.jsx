import { useEffect, useState} from "react";

import { api } from '../../services/api';

import { Container, Title } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"

import { FiPlus } from 'react-icons/fi'
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";

export const Home = () => {

    useEffect(() => {
        async function fetchMovies(){
            const { data } = await api.get("/movies");
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

                <main>
                    <Card data={{title: "Interestellar", tags: [{id:1, title: "Ficção Científica"}, {id:2, title: "Drama"}] }} type="button"/>
                </main>

            </Container>
        </>
    )
}