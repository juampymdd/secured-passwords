import './app.css'
import logo from './assets/logowhite.svg'
import { BotonAumentar, BotonCheck, BotonDisminuir, BotonGenerar } from './components/botones'
import { useButtons } from './hooks/useButtons'
import { Controles, Fila, Logo } from './components/CustomComponents'
import { Toaster, toast } from 'sonner'
import { InputSvg } from './components/InputSvg'

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
        <Fila><Toaster position="top-center"/></Fila>
      </form>
    </div>
  )
}

export default App





