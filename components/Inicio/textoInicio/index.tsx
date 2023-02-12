import styled from './style.module.css'

export const TextoInicio = () => {
  return (
    <div className={styled.container}>
      <div className={styled.rol}>Full Stack Developer</div>

      <div className={styled.name}>Vicente Millan</div>

      <div className={styled.description}>
        Sobre todo soy una persona autodidacta, que sabe admitir sus errores y
        corregirlos lo más rápido posible. En la empresa o el equipo donde estoy
        le sumo innovación, soluciones a los problemas y dedicación para llevar
        el producto más allá del 100%.
      </div>
    </div>
  );
};
