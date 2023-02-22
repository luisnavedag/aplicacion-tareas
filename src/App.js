import './App.css';
import logoToDoList from './imagenes/to-do-list.png';
import ListaDeTareas from './componentes/ListaDeTareas';


function App() {
  return (
    <div className="aplicacion-tareas">
        <div className='contenedor-logo'>
          <img alt='logo'
          src={logoToDoList} 
          className='logo' 
          />
        </div>
    <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      <ListaDeTareas />
    </div>
      
    </div>
  );
}

export default App;
