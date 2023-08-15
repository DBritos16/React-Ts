import { useState } from "react";

const Contador = () => {

    const [n1, setN1] = useState<number>(0);
    const [n2, setN2] = useState<number>(0);
    


    const calcular = (): void=>{

        const pares:number[] = [];
        const inpares:number[] = [];
        
        if(n1 > n2){
            return alert('El numero minimo es mayor al maximo, reviselo.')
        }

        for (let i:number = n1; i <= n2; i++) {
            if(i % 2 === 0){
                console.log(i);
                pares.push(i);
            } else inpares.push(i);
        }

        return alert(`Los numeros pares son: ${JSON.stringify(pares)} y los inpares son ${JSON.stringify(inpares)}`);

    }


    return (
        <>
            <h5><b>-Contador de Números pares e Impares:</b></h5>
            <p>Escribir un programa que cuente y muestre la cantidad de números pares e impares en
                un rango dado.</p>

            <div>
                <label htmlFor="customRange1" className="form-label">Minimo</label>
                <input className="form-control" type="number" name="n1" onChange={(e) => setN1(parseInt(e.target.value))} />

                <label htmlFor="">Maximo</label>
                <input className="form-control" type="number" name="n2" onChange={(e) => setN2(parseInt(e.target.value))} />

                <br />

                <button className="btn btn-primary" onClick={()=>calcular()}>Calcular</button>
            </div>
        </>
    )
}

export default Contador