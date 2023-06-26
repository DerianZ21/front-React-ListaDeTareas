import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas';
import Titulo from "./componentes/Titulo.js"


function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='titulo-contenedor'>
        <Titulo input="LISTA DE TAREAS"/>
      </div>
      
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;
