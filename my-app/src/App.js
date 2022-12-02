import React, {Component} from "react";

class App extends Component{

  // Primeira coisa a ser carregado quando chamamos o componente App
  // é o construtor
  constructor(props){
    super(props);
    this.state = {
      hora: '00:00:00'
    }
  }

  componentDidMount(){

    setInterval(()=>{
      this.setState({ hora: new Date().toLocaleTimeString()})
    }, 1000)
  }

  componentDidUpdate(){
    console.log('Atualizou!')
  }

  render(){
    return(
      <div>
        <h1>Meu Projeto  {this.state.hora}</h1>
      </div>
    )
  }
}

export default App;
