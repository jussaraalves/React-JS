import React, { Component } from "react"
class Equipe extends Component{
  render(){
    return(
      <div>
        <Sobre nome={this.props.nome} cargo={this.props.cargo} 
               idade={this.props.idade }/>
        
      </div>
    )
  }
}

class Sobre extends Component{
  render(){
    return(
      //codigo JSX
      <div>
        <h1>Olá, eu sou {this.props.nome}</h1>
        <h3>Cargo: {this.props.cargo}</h3>
        <h3>Idade: {this.props.idade} anos</h3>  
        <hr/>
      </div>
    )
  }
}
export default function App(){
  return(
    <div>
      <h1>Conheça nossa equipe:</h1>
      <Equipe nome="Jussara" cargo="programadora" idade="22"/>
      <Equipe nome="Matheus" cargo="programador" idade="24"/>

    </div>
  )
}

