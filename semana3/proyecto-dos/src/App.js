import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const clickMas1 = () => {
    console.log("nashe");
    setNumClicks(nroClicks + 1);
  }
  const clickMas3 = () => {
    console.log("nashe");
    setNumClicks(nroClicks + 3);
  }
  const clickMenos3 = () => {
    console.log("nashe");
    setNumClicks(nroClicks - 3);
  }
  const clickMenos1 = () => {
    console.log("nashe");
    setNumClicks(nroClicks - 1);
  }
  const reiniciar=()=>{
    console.log("reiniciar");
    setNumClicks(0);
  }
  return (
    <div className="App">
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks} />
        <div className='contendedor-botones'>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={clickMenos3} />
            <Boton texto="+3" esBotonClick={true}
            funcionClick={clickMas3} />
            <Boton texto="-1" esBotonClick={true}
            funcionClick={clickMenos1} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={clickMas1} />
          
        </div>
        <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
      </div>
    </div>
  );
}

export default App;