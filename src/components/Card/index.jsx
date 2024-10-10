import { Container, Rating } from './styles';
import { Tag } from '../Tag'

import { RiStarFill, RiStarLine } from 'react-icons/ri'

export const Card = ({ data, ...rest}) => {
    return(
        <>
            <Container {...rest}>
                <h2>{data.title}</h2>

                <Rating>
                    {Array.from({length : 4}).map((star, index )=> <RiStarFill key={index} />)}
                    <RiStarLine />
                </Rating>

                <p>
                    Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o fantasma é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta.
                </p>

                <footer>
                    {data.tags && data.tags.map(tag => <Tag title={tag.title} key={tag.id} />)}
                </footer>

                

            </Container>
        </>
    )
}