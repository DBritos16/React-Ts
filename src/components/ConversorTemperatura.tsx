import { useState } from 'react'

const ConversorTemperatura = (): JSX.Element => {


    const [select, setSelect] = useState<number>();
    const [n1, setN1] = useState<number>(0);
    const [result, setResult] = useState<number>(0);

    const calcular = (): void=>{

        const fahrenheit:number = (n1 * 9/5) + 32;
        const celsius:number = (n1 - 32) * 5/9;

        switch (select) {
            case 1:
                setResult(fahrenheit);
                break;
            default:
                setResult(celsius)
                break;
        }
    };


    return (
        <>
            <h5><b>-Convertidor de Tempratura</b></h5>
            <p>Crear un programa que convierta entre grados Celsius y Fahrenheit según la eleicción del usuario</p>

            <br />

            <label htmlFor="">Convertir de:</label>
            <select name="select" className='form-control' onChange={({target})=>setSelect(parseInt(target.value))}>
                <option value="1">Celsius a Fahrenheit</option>
                <option value="2">Fahrenheit a Celsius</option>
            </select>

            <input type="number" onChange={({target})=>setN1(parseFloat(target.value))} className='mt-4' placeholder={select == 1 ? 'Celsius' : 'Fahrenheit'} style={{ borderRadius: 0, border: '1px solid #dee2e6' }} /> <input type="number" disabled={true} value={result} placeholder={select == 1 ? 'Fahrenheit' : 'Celsius'} style={{ borderRadius: 0, border: '1px solid #dee2e6' }} />

            <br /><br />

            <button className='btn btn-primary' onClick={()=>calcular()}>Convertir</button>
        
        </>
    )
}

export default ConversorTemperatura