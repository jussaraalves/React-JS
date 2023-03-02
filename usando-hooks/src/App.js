import React, {useState} from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([
    'pagar a conta de luz', 
    'estudar react hooks'
  ]);

  const [input, setInput] = useState();

  function handleAdd(){
    setTarefas([...tarefas, input])
    setInput('');
  }

  return (
    <div className="App">
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>

      <input type="text" value={input} onChange={e => setInput(e.target.value)} />
      <button type='button' onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
