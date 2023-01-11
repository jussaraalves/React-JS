import React from 'react'

export default (props) => {

    function acao(valorGerado){
        props.onClicar(Math.random(), 'Gerado')
    }

    return(
        <div>
            <button onClick={acao}>Alterar</button>
        </div>
    )
}
   
   