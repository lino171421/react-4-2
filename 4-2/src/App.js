import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Btn from './components/Button';

function App() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [correct, setCorrect] = useState(false);  

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    setDisplay(true);
    if (name === 'ADL' && password === "252525") {
      setCorrect(true);
    } else {
      setCorrect(false);
    }
  }

  return (
    <div className="App container">
      <h1 className='text-center'>Desafío Estado de los Componentes y Eventos</h1>

      {display && correct && <div className='alert alert-success'>Datos correctos</div>}   
      {display && !correct && <div className='alert alert-danger'>Datos incorrectos</div>}   
      
      <form onSubmit={handleSubmit}>

        <label>Nombre</label>
        <input id='name' className='form-control' type='text' onChange={(e) => {setName(e.target.value)}}></input>

        <label>Password</label>
        <input id='password' className='form-control' type='password' onChange={(e) => {setPassword(e.target.value)}}></input>     

        <div className='mt-3'>
          {name.length > 0 && password.length >0 && <Btn text = "Iniciar sesión"></Btn>}        

        </div>  
      </form>    
    </div>
  );
}

export default App;
