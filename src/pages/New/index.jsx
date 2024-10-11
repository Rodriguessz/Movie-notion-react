import { Container, Form, Marcadores, Actions } from "./styles"

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from "../../components/Input"
import { Textarea } from "../../components/Textarea"


import { FiArrowLeft } from "react-icons/fi"
import { Marcador } from "../../components/Marcador"




export const New = () => {
    return (
        <>

            <Container>
                <Header />

                <main>
                    <ButtonText to="/" icon={FiArrowLeft} title="Voltar" />

                    <Form>
                        <h1>Novo Filme</h1>
                        
                        <div>
                            <Input type="text" placeholder="Título" />
                            <Input type="text" placeholder="Sua nota (de 0 a 5)" />
                        </div>

                        <Textarea  placeholder="Observações " />

                        <Marcadores>
                            <h2>Marcadores</h2>

                            <div>
                               <Marcador value="React" />
                               <Marcador  placeholder="Teste" isNew/>

                            </div>
                        </Marcadores>
                        
                        <div>
                            <Button type="button" title="Exlcuir filme" isDelete/>
                            <Button type="button" title="Salvar alterações" />
                        </div>



                        
                    </Form>
                </main>


            </Container>

        </>
    )
}