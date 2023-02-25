import styled from './style.module.css'

export const Front = () => {
    return (
        <div className={styled.container}>
            <div className={styled.title}>
                Front-End
            </div>

            <div className={styled.items_container}>
                <div className={styled.items}></div>
                
                <div className={styled.items}></div>
                
                <div className={styled.items}></div>
                
                <div className={styled.items}></div>
            </div>
        </div>
    )
}