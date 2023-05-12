import './App.css';
import Mensaje from './mensaje';

const Description = ()=>{
  return <p>Esto es la app del curso</p>
}


const App = () => {

  return (
    <div className="App">
    <Mensaje color='yellow' message='Estamos trabajando'/>
    <Mensaje color='red' message='en el curso'/>
    <Mensaje color='orange' message='de React'/>
    <Mensaje />
    <Description />
    </div>
  );
}

export default App;