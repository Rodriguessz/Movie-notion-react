import { Container, Rating } from './styles';
import { Tag } from '../Tag'

import { RiStarFill, RiStarLine } from 'react-icons/ri'

export const Card = ({ data, ...rest}) => {

    return(
        <>
            <Container {...rest}>
                <h2>{data.title}</h2>

                <Rating>
                    {Array.from({length : data.rating}).map((star, index )=> <RiStarFill key={index} />)}
                </Rating>

                <p>
                   {data.description}
                </p>

                <footer>
                    {data.tags && data.tags.map((tag , index)=> <Tag title={tag} key={String(index)} />)}
                </footer>

                

            </Container>
        </>
    )
}