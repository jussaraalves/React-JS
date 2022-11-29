import React, { Component } from 'react';

class App extends Component {

  constructor(props){
    super(props);
    // Inicializa state.
    this.state = {
      nome: 'Jussara',
      contador: 0
    }

    // Aqui utilizamos o `bind` para que o `this` funcione dentro da nossa callback
    this.aumentar = this.aumentar.bind(this);
    this.diminuir = this.diminuir.bind(this);
  }
  
  // `aumentar`e `diminuir` são métodos usado como eventos DOM.
  // link para doc: https://pt-br.reactjs.org/docs/handling-events.html
  aumentar() {
    this.setState({
      nome: 'Jussara Alves',
      contador: this.state.contador + 1,
    })
  }

  diminuir() {
    let currentState = this.state.contador;
    if(currentState === 0){
      alert("Opa, chegou a zero!")
      return;
    }
    // Altera a state
    this.setState({
      nome: 'Jussara',
      contador: currentState - 1,
    })
  }

  render() {
    return(
      // Codigo JSX
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