import React, { useState } from 'react'

const ContadorPalabras = (): JSX.Element => {

  const [texto, setTexto] = useState<string>('');

  const contarPalabras = ():void =>{
    const palabras = texto.split(/\s+/).filter(palabra => palabra.length > 0);


    console.log(palabras);
    
    // Cuenta la cantidad de palabras
    const cantidadPalabras = palabras.length;

    return alert('El texto tiene '+cantidadPalabras+' de palabras');
  }

  return (
    <>
        <h5><b>- Contador de Palabras:</b></h5>
        <p>Pedir al usuario que ingrese una oración y muestra la cantida de palabras en esa oración</p>

        

        <label htmlFor="oracion">Ingrese una oración.</label>
        <input type="text" id='oracion' placeholder='Escribir algo...' className='form-control' onChange={({target})=>setTexto(target.value)}/>

        <br />

        <button className='btn btn-primary' onClick={()=>contarPalabras()}>Contar palabras</button>
    </>
  )
}

export default ContadorPalabras