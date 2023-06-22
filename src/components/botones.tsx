import { FC } from "react";
import { styled } from "styled-components";

interface BotonProps {
  click?: () => void
}

interface CheckProps {
  checked: boolean;
  click: () => void;
}

export const BotonDisminuir: FC<BotonProps> = ({ click }) => {
  return (
    <Boton onClick={click}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-dash" viewBox="0 0 16 16">
        <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
      </svg>
    </Boton>
  );
};

export const BotonAumentar: FC<BotonProps> = ({ click }) => {
  return (
    <Boton onClick={click}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-plus" viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
      </svg>
    </Boton>
  );
}

export const BotonCheck: FC<CheckProps> = ({ checked, click }) => {
  if (checked)
    return (
      <BotonSeleccionado  type="submit" onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-lg" viewBox="0 0 16 16">
          <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
        </svg>
      </BotonSeleccionado>
    )
  else
    return (
      <Boton type="submit" onClick={click}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </Boton>
    )
}

export const BotonGenerar: FC<BotonProps> = ({ click }) => {
  return (
    <BtnGenerar type="submit" onClick={click}>
      Generar
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-lock-fill" viewBox="0 0 16 16">
        <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
      </svg>
    </BtnGenerar>
  )
}

const Boton = styled.button`
  display: inline-flex;
  justify-content: center;
  width: 100%;
  background: #8b3c96;
  color: #fff;
  align-items: center;
  height: 40px;
  vertical-align: top;
  font-size: 18px;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #b450ac;
  }
`

const BtnGenerar = styled(Boton)`
  svg {
    margin-left: 10px;
  }
`
const BotonSeleccionado = styled(Boton)`
  background: #d96da7;
  &:hover {
    background: #b450ac;
  }
`