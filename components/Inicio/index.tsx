import styled from './style.module.css'
import { TextoInicio } from './textoInicio/index'

export const Inicio = () => {
    return (
        <div className={styled.container}>
        
            <TextoInicio/>
        
        </div>
    )
}