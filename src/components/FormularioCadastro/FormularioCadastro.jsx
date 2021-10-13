import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {

    constructor(props){
        super(props);
        this.titulo ='';
        this.texto ='';
        this.categorias ='';
    }

    _handleMudancaTitulo (evento){
        evento.stopPropagation();
        this.titulo = evento.target.value;
        
    }
    _handleMudancaTexto (evento){
        evento.stopPropagation();
        this.texto = evento.target.value;
        
    }

    _handleMudancaCategoria (evento){
        evento.stopPropagation();
        console.log(evento.target.value)
        this.categorias = evento.target.value;
        
    }
    _criarNota(evento){
        evento.preventDefault();
        this.props.criarNota(this.titulo, this.texto, this.categorias);
        setTimeout(() => {
            const el = evento.target.parentNode.nextSibling.lastChild.lastElementChild;
            el.classList.add('lista-nota__lista--criada')

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
                <select 
                    onChange={this._handleMudancaCategoria.bind(this)}
                    className="cadastro__categorias"
                    >
                        <option >Sem categoria</option>
                        {this.props.categorias.map((categoria, indice)=>{
                            return <option key={indice}>{categoria}</option>

                        })}
                </select>
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