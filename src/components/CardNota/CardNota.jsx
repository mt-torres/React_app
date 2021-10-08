import React from 'react'
import { Component } from 'react';

class CardNota extends Component {
    render() {
        return (
            <section className="card-nota">
                <header>
                    <h3 className="card-nota__titulo">Título</h3>
                </header>
                <p className="card-nota__nota">Escreva sua nota</p>
            </section>
        )
    }

}

export default CardNota;