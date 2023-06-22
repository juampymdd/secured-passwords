export interface Configuracion {
  caracteres: number;
  simbolos: boolean;
  numeros: boolean;
  mayusculas: boolean;
}

export const generarPassword = (configuracion: Configuracion) => {
  const { caracteres, simbolos, numeros, mayusculas } = configuracion;
  const avoid = {
    numeros: '0 1 2 3 4 5 6 7 8 9',
    simbolos: '! @ # $ % ^ & * ( ) _ - + = { [ } ] ; : < , > . ? /',
    mayusculas: 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z',
    minusculas: 'a b c d e f g h i j k l m n o p q r s t u v w x y z'
  }
  let caracteresFinales = '';
  let password = '';

  /* Checking if the `simbolos`, `numeros`, and `mayusculas` properties of the `configuracion` object
  are truthy. If they are, it concatenates the corresponding string of characters from the `avoid`
  object to the `caracteresFinales` string. If any of these properties are falsy, the corresponding
  string of characters is not added to `caracteresFinales`. */

  simbolos    && (caracteresFinales += avoid.simbolos+' '); 
  numeros     && (caracteresFinales += avoid.numeros+' ');
  mayusculas  && (caracteresFinales += avoid.mayusculas+' ');

  caracteresFinales += avoid.minusculas;
  caracteresFinales = caracteresFinales.trim();

  const total = caracteresFinales.split(' ');

  for (let i = 0; i < caracteres; i++) {
    const indice = Math.floor(Math.random() * total.length)
    password += total[indice];
  }
  return password;
}


export const copiarAlPortapapeles = (texto:string) => {
  const el = document.createElement('textarea');
  el.value = texto;
  document.body.appendChild(el);
  el.select();

  // Agregar el evento de clic para copiar al portapapeles
  el.addEventListener('click', function() {
    try {
      document.execCommand('copy');
      console.log('Texto copiado al portapapeles: ', texto);
    } catch (error) {
      console.error('Error al copiar al portapapeles: ', error);
    }
    document.body.removeChild(el);
  });

  // Simular un clic en el elemento para copiar al portapapeles
  el.click();
}