import React from 'react';
import { Component } from 'react';
import CardNota from '../CardNota';

class ListaDeNotas extends Component { 
    render(){
        return (
        <ul className='lista-nota'>
            {this.props.notas.map((nota, index) =>{
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