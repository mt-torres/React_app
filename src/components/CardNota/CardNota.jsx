import { ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'
import React from 'react';
import { Component } from 'react';

class CardNota extends Component {
    apagar(){
        const indice = this.props.index;
        this.props.apagarNota(indice);
    }

    render() {
        return (
            <section className="card-nota">
                <header className='card-nota__titulo'>
                    <h3 
                    className="card-nota__titulo__texto">{this.props.titulo}
                    </h3>
                    <DeleteSVG 
                    className='card-nota__titulo__delete'  
                    onClick={this.apagar.bind(this)}/>
                </header>
                <p 
                className="card-nota__nota">{this.props.texto}
                </p>
            </section>
        )
    }

}

export default CardNota;