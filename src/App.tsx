import Calculadora from "./components/Calculadora";
import Contador from "./components/Contador";


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

      </div>
    </>
  )
}

export default App
