
const Fibonacci = (): JSX.Element => {

    const sucesion = (): void => {

        [0, 1]

        let firts: number[] = [1];
        let second: number[] = [1];


        for (let i: number = 0; i < 10; i++) {

            let suma: number = firts[i] + second[i]

            firts.push(suma);
            second.push(firts[i]);

            console.log(`${firts[i]}+${second[i]}=${firts[i] + second[i]}`)
        }

        return alert('Mira la consola')
    }



    return (
        <>
            <h5><b>-Fibonacci</b></h5>
            <p>Escribir un programa que genere y muestre los primeros N números de la secuencia
                de Fibonacci. - Convertidor de</p>
            <div>
                <button className="btn btn-primary" onClick={() => sucesion()}>Ejecutar</button>
            </div>
        </>
    )
}

export default Fibonacci