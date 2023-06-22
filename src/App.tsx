import './app.css'
import logo from './assets/logowhite.svg'
import { BotonAumentar, BotonCheck, BotonDisminuir, BotonGenerar } from './components/botones'
import { useButtons } from './hooks/useButtons'
import { Controles, Fila, Logo } from './components/CustomComponents'
import { Toaster, toast } from 'sonner'
import { InputSvg } from './components/InputSvg'
import { styled } from 'styled-components'

function App() {

  const {
    password,
    onSubmit,
    configuracion,
    incrementarCaracteres,
    decrementarCaracteres,
    toggleSimbolos,
    toggleNumeros,
    toggleMayusculas,
  } = useButtons()  
  
  const copyPassword = () => {
    navigator.clipboard.writeText(password)
    toast.success('password copiada')
  }

  return (
    <div className='container'>
      <Logo>
        <img src={logo} width={200} height={200}alt="logo de secured passwords" />
      </Logo>
      <form onSubmit={onSubmit}>
        <Fila>
          <label>Número de caracteres</label>
          <Controles>
            <BotonDisminuir click={decrementarCaracteres} />
            <span>{configuracion.caracteres}</span>
            <BotonAumentar click={incrementarCaracteres} />
          </Controles>
        </Fila>
        <Fila>
          <label>¿Inlcuir Símbolos?</label>
          <BotonCheck checked={ configuracion.simbolos } click={toggleSimbolos} />
        </Fila>
        <Fila>
          <label>¿Inlcuir Números?</label>
          <BotonCheck checked={ configuracion.numeros } click={toggleNumeros}/>
        </Fila>
        <Fila>
          <label>¿Inlcuir Mayúsculas?</label>
          <BotonCheck checked={ configuracion.mayusculas } click={toggleMayusculas}/>
        </Fila>
        <Fila>
          <BotonGenerar />
          
          <InputSvg value={password} readOnly click={copyPassword}/>
        </Fila>
          <Anchor href="https://github.com/juampymdd/secured-passwords" target="_blank">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            Ver en Github 
          </Anchor >
        <Fila><Toaster position="top-center"/></Fila>

      </form>
    </div>
  )
}

export default App

const Anchor = styled.a`
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  gap: 0.5rem;
  color: #f6a8ff;
  transition: all 0.3s ease-in-out;
  // hover
  &:hover {
    color: #dd27f1;
  }
`



