import { useState } from 'react'

const TablaMultiplicar = () => {

    const [n, setN] = useState<number>(0);


    const calcular = (): void => {

        for (let i: number = 1; i <= 10; i++) {
            console.log(`${n}*${i}=${n * i}`);
        }
        return alert('Mira la consola');
    }

    return (
        <>
            <h5><b>-Tabla de Multiplicar</b></h5>
            <p>Pedir al usuario un número y mostrar la tabla de multiplicar correspondiente hasta
                cierto valor (por ejemplo, hasta 10). - Fibonacci:</p>
            <div>
                <input type="number" className='form-control' onChange={({ target }) => setN(parseInt(target.value))} />

                <br />

                <button className='btn btn-primary' onClick={() => calcular()}>Mostrar</button>

            </div>
        </>
    )
}

export default TablaMultiplicar