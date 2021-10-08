import React from 'react'
import { Component } from 'react';
import '../../css/style.css'

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3>Título</h3>
                </header>
                <p>Escreva sua nota</p>
            </section>
        )
    }

}

export default CardNota;