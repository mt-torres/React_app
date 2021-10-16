import React from 'react';
import { Component } from 'react';
import CardNota from '../CardNota';

class ListaDeNotas extends Component { 
    constructor(){
        super();
        this.state = {notas:[]};
        this._novasNotas = this._novasNotas.bind(this)
    }

    

    componentDidMount(){
        this.props.notas.inscrever(this._novasNotas)
    }
    
    componentWillUnmount(){
        this.props.notas.desinscrever(this._novasNotas)
    }
     _novasNotas(notas){
         this.setState({...this.state,notas}); 
         
         
     }
    render(){
        return (
        <ul className='lista-nota'>
            {this.state.notas.map((nota, index) =>{
                return(
                    <li 
                    className='lista-nota__lista' 
                    key= {index}
                    >
                        <CardNota 
                        indice ={index}
                        titulo={nota.titulo} 
                        texto={nota.texto}
                        categorias={nota.categoria}

                        apagaNota={this.props.apagaNota} 
                        />
                    </li>

                )

            })}
        </ul>
        )
    }

}

export default ListaDeNotas;