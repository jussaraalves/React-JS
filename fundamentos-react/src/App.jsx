import './App.css'
import React from 'react';

import Primeiro from'./components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro';
import ComFilhos from'./components/basicos/ComFilhos';
import Card from'./components/layout/Card';
import Repeticao  from './components/basicos/Repeticao';
import Condicional  from './components/basicos/Condicional';
import CondicionalComIf from'./components/basicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/pai';
import Super from'./components/comunicacao/indireta/Super';
import Input from'./components/form/Input';
import Contador from './components/contador/Contador';
import Mega from'./components/mega/Mega';

export default (props) => (
<div className='App'>
    <Card titulo="#11 - Contador" color="#dbefde">
        <Mega qtdeNumero={8}></Mega>
    </Card>
    <Card titulo="#10 - Contador" color="#8bdbe3">
        <Contador passo={10} valor={100}></Contador>
    </Card>
    <Card titulo="#09 - Input" color="#d5f2f5">
        <Input></Input>
    </Card>
    <Card titulo="#08 - Comunicaçao Indireta" color="#fad2e8">
        <Super></Super>
    </Card>
    <Card titulo="#07 - Comunicaçao Direta" color="#e2afbf">
        <Pai sobrenome="Freitas"></Pai>
    </Card>
    <Card titulo="#06 - Condicional v2" color="#d8bfd8">
         <CondicionalComIf numero={10}></CondicionalComIf>
    </Card>
    <Card titulo="#05 - Condicional v1" color="#ffe4e1">
         <Condicional numero={15}></Condicional>
    </Card>
    <Card titulo="#04 - Repetiçao" color="#e6e6fa">
         <Repeticao></Repeticao> 
    </Card>
    <Card titulo="#03 - Componente Com Filhos" color="#d5f2f5">
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
    </Card>
    <Card titulo="#02 - Componente Com Parametro" color="#ffd0cb">
        <ComParametro titulo="Esse é o título" 
        subtitulo="Esse é o subtitulo"/>
    </Card>

    <Card titulo="#01 - Primeiro Componente" color="#cbe1ff">
        <Primeiro/>
    </Card>
</div>

)