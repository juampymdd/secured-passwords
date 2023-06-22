import { useEffect, useState } from "react"
import { Configuracion, generarPassword } from "../functions/generarPassword"

export const useButtons = () => {

  const [configuracion, setconfiguracion]= useState<Configuracion>({
    caracteres: 12,
    simbolos: true,
    numeros: true,
    mayusculas: true
  })
  const [password, setpassword] = useState(generarPassword(configuracion))

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setpassword(generarPassword(configuracion))
  }
  const incrementarCaracteres = () => {
    setconfiguracion(prev => ({...prev, caracteres: prev.caracteres + 1}))
  }

  const decrementarCaracteres = () => {
    if (configuracion.caracteres === 0) return
    setconfiguracion(prev => ({...prev, caracteres: prev.caracteres - 1}))
  }

  const toggleSimbolos = () => {
    setconfiguracion(prev => ({...prev, simbolos: !prev.simbolos}))
  }

  const toggleNumeros = () => {
    setconfiguracion(prev => ({...prev, numeros: !prev.numeros}))
  }

  const toggleMayusculas = () => {
    setconfiguracion(prev => ({...prev, mayusculas: !prev.mayusculas}))
  }

  useEffect(() => {
    setpassword(generarPassword(configuracion))
  }, [configuracion])
  return {
    password,
    onSubmit,
    configuracion,
    incrementarCaracteres,
    decrementarCaracteres,
    toggleSimbolos,
    toggleNumeros,
    toggleMayusculas,
  }
}
