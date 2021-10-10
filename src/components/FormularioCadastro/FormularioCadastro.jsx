import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo ='';
        this.texto ='';
    }

    _handleMudancaTitulo (evento){
        this.titulo = evento.target.value;
        evento.stopPropagation();
        
    }
    _handleMudancaTexto (evento){
        this.texto = evento.target.value;
        evento.stopPropagation();
        
    }
    _criarNota(evento){
        evento.preventDefault();
        this.props.criarNota(this.titulo, this.texto);
        setTimeout(() => {
            const el = evento.target.parentNode.nextSibling.lastChild.lastElementChild;
        console.log(el)
            el.classList.add('lista-nota__lista--nova')

        }, 1);
        
        
    }

    render() {
        return (
            <form className='cadastro'
                onSubmit={this._criarNota.bind(this)}
            >

                <input 
                className='cadastro__input' 
                type='text' 
                placeholder="Título"
                onChange={this._handleMudancaTitulo.bind(this)}
                />
                <textarea 
                className='cadastro__nota'
                placeholder="Escreva sua nota..."
                onChange={this._handleMudancaTexto.bind(this)}
                />
                <button className='cadastro__botao'>
                    Criar nota
                </button>
            </form>
        )

    }
}

export default FormularioCadastro;