import { Container } from "./styles";

import { FiPlus, FiX } from "react-icons/fi";



export const Marcador =  ({isNew, onClick , value ,...rest}) => {
    return(
        <>
            <Container $isnew={isNew} >
                
                <input readOnly={!isNew} value={value} {...rest} />
                <button  type="button" onClick={onClick}>
                    {isNew ? <FiPlus /> : <FiX />}
                </button>
                
            </Container>
        </>
    )
}