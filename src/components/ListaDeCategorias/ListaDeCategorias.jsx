import React from "react";
import { Component } from 'react';

class ListaDeCategorias extends Component {
    constructor(){
        super();
        this.state = {categorias:[]}
        this._novasCategotias = this._novasCategorias.bind(this)
    }

   componentDidMount(){
       this.props.categorias.inscrever(this._novasCategotias)
   }
   componentWillUnmount(){
    this.props.categorias.desinscrever(this._novasCategotias)
   }

    _novasCategorias(categorias){
        this.setState({...this.state,categorias}); 
        
        
    }
 

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
                    {this.state.categorias.map((categoria,index)=>{
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