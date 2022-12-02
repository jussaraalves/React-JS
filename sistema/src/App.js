import React, { Component } from 'react';

class App extends Component{

  constructor(props){
    super(props);
    // Inicializa state.
    this.state = {
      nome: 'Jussara',
      contador: 0
    }
    // Aqui damos acesso

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
   // `aumentar`e `diminuir` são métodos usado como eventos DOM.
  // link para doc: https://pt-br.reactjs.org/docs/handling-events.html
  aumentar(){
    let state = this.state;
    state.nome = 'Jussara Alves'
    state.contador = state.contador +1;
    this.setState(state)
  } 

  diminuir(){
    let state = this.state;
    if(this.state.contador === 0){
      alert("Opa, chegou a zero!")
      return;
    }
    state.nome = 'Jussara'
    state.contador = state.contador -1;
    // Altera a state
    this.setState(state)
  }

  render(){
    return(
      //Codigo JSX
      <div>
        <h1>Contador</h1>
          {this.state.nome}
        <h3>
        <button onClick={this.diminuir}>-</button>
          {this.state.contador}
        <button onClick={this.aumentar}>+</button>
        </h3>
      </div>
    )
  }
}

// Exportar o componente
 export default App;