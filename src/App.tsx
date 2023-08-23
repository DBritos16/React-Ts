import Calculadora from "./components/Calculadora";
import Contador from "./components/Contador";
import ConversorTemperatura from "./components/ConversorTemperatura";
import Fibonacci from "./components/Fibonacci";
import TablaMultiplicar from "./components/TablaMultiplicar";
import ContadorPalabras from './components/ContadorPalabras'


function App() {
  
  return (
    <>
      <div className="container">
        <h1>Consignas:</h1>
        <p>Resuelva los siguientes ejercicios aplicando las funcionalidades de TypeScript.</p>

        <br/>

        <Calculadora/>

        <br />

        <Contador/>

        <br />

        <TablaMultiplicar/>

        <br />

        <Fibonacci/>

        <br />

        <ConversorTemperatura/>

        <br />  <br />

        <ContadorPalabras/>
      </div>
    </>
  )
}

export default App
