import React, { useState } from "react";

export default (props) => {
    const [nome, setNome] =  useState('Pedro')

    return(
        <div>
            <h3>{nome}</h3>
            <input type="texto" value={nome}
                onChange={evento => setNome(evento.target.value)}></input>
        </div>
    )
}