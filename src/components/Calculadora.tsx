import { useState } from "react";

const Calculadora = () => {

    const [n1, setN1] = useState<number>(0);
    const [n2, setN2] = useState<number>(0);
    const [operando, setOperando] = useState<number>();

    const calcular = (): void => {

        switch (operando) {
            case 1:
                alert(n1 + n2);
                break;
            case 2:
                alert(n1 - n2);
                break;
            case 3:
                alert(n1 / n2);
                break;
            case 4:
                alert(n1 * n2);
                break;

            default:
                alert('Imposible calcular');
                break;
        }


    }

    return (
        <>
            <h5><b>- Calculadora Simple:</b></h5>
            <p>Crear una calculadora que permita al usuario ingresar dos números y una operación
                (suma, resta, multiplicación, división) y muestre el resultado. - Contador de Números Pares e Impares:</p>

            <div style={{ maxWidth: '500px', display: 'flex', alignItems: 'start', flexDirection: 'column' }}>
                <label htmlFor="">Primero Numero</label>
                <input className="form-control" type="number" name="n1" onChange={(e) => setN1(parseFloat(e.target.value))} />

                <label htmlFor="">Segundo Numero</label>
                <input className="form-control" type="number" name="n2" onChange={(e) => setN2(parseFloat(e.target.value))} />

                <label htmlFor="operando">Seleccione operación</label>
                <select className="form-control" id="operando" onChange={(e) => setOperando(parseInt(e.target.value))}>
                    <option value="">Seleccione una opción</option>
                    <option value="1">suma</option>
                    <option value="2">resta</option>
                    <option value="3">división</option>
                    <option value="4">multiplicación</option>
                </select>
                <br />
                <button className="btn btn-primary" onClick={() => calcular()}>Calcular</button>
            </div>
        </>
    )
}

export default Calculadora