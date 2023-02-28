import React, {Component} from "react";
import Feed from "../Feed";

class Lista extends Component{
    constructor(props){
        super(props)
        this.state = {
            feed:[
                {id:1, username: 'jussara', curtidas: 122, comentarios: 23},
                {id:2, username: 'arthurdev', curtidas: 10, comentarios:2},
                {id:3, username: 'lucas', curtidas: 40, comentarios:9},
                {id:4, username: 'Ricardo', curtidas: 1, comentarios:0},
                {id:5, username: 'Lais', curtidas: 5, comentarios:0}
            ]
        }
    }

    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed id={item.id} username={item.username} 
                        curtidas={item.curtidas} comentarios={item.comentarios}/>
                    )
                })}
            </div>
        )
    }
   
}

export default Lista