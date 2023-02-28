import React, {Component} from "react";

class PraticandoFormulario extends Component{
    constructor(props){
        super(props)
        this.state ={
            nome: '',
            email: '',
            senha: '',
            error: ''
        }

        this.getEmail = this.getEmail.bind(this);
        this.getSenha = this.getSenha.bind(this);
        this.cadastrar = this.cadastrar.bind(this);
    }

    getEmail(event){
        let getEmail = event.target.value
        this.setState({email: getEmail})
    }
    
    getSenha(event){
        let getSenha = event.target.value
        this.setState({senha: getSenha})
    }

    cadastrar(event){
        // Atribuição via desestruturação (destructuring assignment)
        const {nome, email, senha} = this.state

        if(nome !== '' && email !== '' && senha !== ''){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`)
        }else{
            this.setState({error: 'Preencha todos os campos!'})
        }

        event.preventDefault()
    }

    render(){
        return(
            <div>
                <h1>Novo usuario</h1>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" name="nome" value={this.state.nome} onChange={(evento) => this.setState({nome: evento.target.value})}/> <br/>
                    
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.email} onChange={this.getEmail}/> <br/>
                    
                    <label>Senha:</label>
                    <input type="password" name="senha" value={this.state.senha} onChange={this.getSenha}/> <br/>

                    <button type="submit">Cadastrar</button>
                </form>

            </div>
        )
    }
}

export default PraticandoFormulario;

