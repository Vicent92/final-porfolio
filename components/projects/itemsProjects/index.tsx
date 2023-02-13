import styled from './style.module.css'

export const ItemsProjects = () => {
    return (
        <div className={styled.container}>
            <div className={styled.image}></div>

            <div className={styled.container_boton}>
                <button className={styled.boton_demo}>Demo</button>

                <button className={styled.boton_code}>Code</button>
            </div>
        </div>
    )
}