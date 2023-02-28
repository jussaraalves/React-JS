import React, {Component} from "react";
import Membro from "./components/Membro/Membro";
import RenderizacaoCondicional from "./components/RenderizacaoCondicional";
import Lista from "./components/Lista/Lista";
import Formualario from "./components/Formulario";
import PraticandoFormulario from "./components/PraticandoFormulario";
import FormualarioPt2 from "./components/FormularioPt2";
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
        {/* <h1>Meu Projeto  {this.state.hora}</h1> */}
        {/* <Membro nome='visitante'/> */}
        {/* <RenderizacaoCondicional/> */}
        {/* <Lista/> */}
        <FormualarioPt2/>
        {/* <PraticandoFormulario/> */}
      </div>
    )
  }
}

export default App;
