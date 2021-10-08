import React from 'react'
import { Component } from 'react'
import CardNota from '../CardNota';

class ListaDeNotas extends Component { 
    render(){
        return (
        <ul className='lista-nota'>
            {Array.of('Trabalho','Trabalho', 'Estudos').map((categoria, index) =>{
                return(
                    <li className='lista-nota__lista' key= {index}>
                
                        <CardNota/>
                    </li>

                )

            })}
        </ul>
        )
    }

}

export default ListaDeNotas;