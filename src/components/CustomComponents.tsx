import { styled } from 'styled-components'

export const Logo = styled.div`
  margin-bottom: 50px;
  img {
    width: 100%;
    vertical-align: top;
  }
`
export const Fila = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px
  `;

  
export const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    flex: 1;
  }
  span{
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    line-height: 40px;
    background-color: #5f2c81;
  }
`

export const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255,255,255,0.25);
  color: #f6a8ff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover{
    border: 1px solid rgba(255,255,255,0.5);
  }

  &::selection{
    background: #44096b;
  }
  &::-moz-selection{
    background: #44096b;
  }
`

// Define el componente de entrada (input) estilizado

interface InputProps {
  hovered: boolean;
  svg?: string;
}

// Define el componente de entrada (input) estilizado
export const StyledInput = styled(Input)<InputProps>`
  position: relative;
  background-repeat: no-repeat;
  background-position: right center;
  background-size: 25px 25px;
  cursor: ${(props) => (props.hovered ? 'pointer' : 'auto')};
  background-image: ${(props) => (props.hovered ? `url("${props.svg}")` : 'none')};
`;

// Define el componente que contiene el input y el SVG
export const InputWithSVG = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: middle;
`;

// Define el componente SVG
export const SVG = styled.div<InputProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 16px; /* Ajusta el tamaño del SVG según tus necesidades */
  height: 16px;
  opacity: ${(props) => (props.hovered ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;