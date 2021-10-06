import React from 'react'
import { Component } from 'react';

export default class FormularioCadastro extends Component {
    render() {
        return (
            <form>
                <input type='text' placeholder="Título"></input>
                <textarea placeholder="Escreva sua nota..."></textarea>
                <button>Criar nota</button>
            </form>
        )

    }
}