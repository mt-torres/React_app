import React from "react";
import { Component } from 'react';

class ListaDeCategorias extends Component {
 /*    constructor(props){
        super(props);
        this.categoria= '';
    }
 */

    _handleEventoInput(evento){
        if(evento.key === 'Enter'){
            
            this.props.adicionarCategoria(evento.target.value);
            evento.target.value ='';

        }
    }
    render() {
        return (
            <section className="lista-categoria">
                <ul className='lista-categoria__listas'>
                    {this.props.categorias.map((categoria,index)=>{
                        return <li key={index} className='lista-categoria__listas__item'>{categoria}</li>;

                    })}
                    </ul>
                <input 
                    className='lista-categoria__input' 
                    type="text" 
                    placeholder='Insira uma nova categoria'
                    onKeyUp={this._handleEventoInput.bind(this)} >
                </input> 
            </section>
        );
    }


}

export default ListaDeCategorias;