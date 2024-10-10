import { Container, Title } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button"

import { FiPlus } from 'react-icons/fi'
import { Card } from "../../components/Card";

export const Home = () => {
    return(
        <>
            <Container>
                <Header />

                <Title>
                    <h1>Meus Filmes</h1>
                    
                    <div>
                        <Button icon={FiPlus} title="Adicionar" />
                    </div>
                
                </Title>

                <main>
                    <Card data={{title: "Interestellar", tags: [{id:1, title: "Ficção Científica"}, {id:2, title: "Drama"}] }} type="button"/>
                    <Card data={{title: "Interestellar", tags: [{id:1, title: "Ficção Científica"}, {id:2, title: "Drama"}] }} type="button"/>
                    <Card data={{title: "Interestellar", tags: [{id:1, title: "Ficção Científica"}, {id:2, title: "Drama"}] }} type="button"/>
                    
                </main>

            </Container>
        </>
    )
}