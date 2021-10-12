import React from "react";
import { Component } from 'react';

class ListaDeCategorias extends Component {

    render(){
        return(
            <section className="lista-categoria">
                <ul className='lista-categoria__listas'>
                    <li className='lista-categoria__listas__item'>Categoria</li>
                    <li className='lista-categoria__listas__item'>Categoria</li>
                    <li className='lista-categoria__listas__item'>Categoria</li>
                    <li className='lista-categoria__listas__item'>Categoria</li>
                    <li className='lista-categoria__listas__item'>Categoria</li>
                   
                    
                </ul>
                <input className='lista-categoria__input' type="text"></input>
            </section>
        );
    }


}

export default ListaDeCategorias;