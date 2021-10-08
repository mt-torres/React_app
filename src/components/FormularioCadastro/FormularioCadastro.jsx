import React from 'react'
import { Component } from 'react';

class FormularioCadastro extends Component {
    render() {
        return (
            <form className='cadastro'>
                <input className='cadastro__input' type='text' placeholder="Título"></input>
                <textarea className='cadastro__nota'placeholder="Escreva sua nota..."></textarea>
                <button className='cadastro__botao'>Criar nota</button>
            </form>
        )

    }
}

export default FormularioCadastro;