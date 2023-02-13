import styled from './style.module.css'
import { Front } from './front/index'
import { Back } from './back/Back'

export const Skils = () => {
    return (
        <div className={styled.container}>
            <Front/>

            <Back/>
        </div>
    )
}