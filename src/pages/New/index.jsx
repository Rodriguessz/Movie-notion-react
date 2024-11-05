import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { Container, Form, Marcadores } from "./styles"

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"

import { FiArrowLeft } from "react-icons/fi"
import { Marcador } from "../../components/Marcador"
import { api } from "../../services/api"




export const New = () => {

    const naviagate = useNavigate()

    const [title, setTitle] = useState("");
    const [rate, setRate] = useState("");
    const [observations, setObservations] = useState("");

    const [newTag, setNewTag] = useState("");
    const [tags, setTags] = useState([]);

    function handleAddTag() {
        if (!newTag) return alert("Please, fill the field if you want add marks.")
        setTags(previousState => [...previousState, newTag])
        setNewTag("");
    }

    function handleRemoveTag(deletedIndex) {
        setTags(tags.filter((tag, index) => index != deletedIndex))
    }


    async function handleAddMovie() {
        if(rate < 0 || rate > 5) return alert("The rating must be between 0 and 5")
        try {
            await api.post("movies/create", { title, rating: rate, description: observations, tags })
            alert("Movie successfuly created!");
            naviagate("/")
            
        }catch(error){
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Please, try again later!")
            }
        }    
        
    }


    return (
        <>

            <Container>
                <Header />

                <main>
                    <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />

                    <Form>
                        <h1>Novo Filme</h1>

                        <div>
                            <Input type="text" placeholder="Título" onChange={e => setTitle(e.target.value)} />
                            <Input type="text" placeholder="Sua nota (de 0 a 5)" onChange={e => setRate(e.target.value)} />
                        </div>

                        <Textarea placeholder="Observações " onChange={e => setObservations(e.target.value)} />

                        <Marcadores>
                            <h2>Marcadores</h2>

                            <div>
                                {
                                    tags.length > 0 &&
                                    tags.map((tag, index) => <Marcador key={index} value={tag} onClick={() => handleRemoveTag(index)} />)
                                }
                                <Marcador placeholder="Marcador" value={newTag} isNew onChange={e => setNewTag(e.target.value)} onClick={handleAddTag} />

                            </div>
                        </Marcadores>

                        <div className="actions">
                            <Button type="button" title="Adicionar" onClick={handleAddMovie}/>
                        </div>




                    </Form>
                </main>


            </Container>

        </>
    )
}