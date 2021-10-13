import { ReactComponent as DeleteSVG} from '../../assets/img/delete.svg'
import React from 'react';
import { Component } from 'react';

class CardNota extends Component {
    apagar(evento){
        const alvo = evento.target.closest('.lista-nota__lista');
        console.log(alvo);
        alvo.classList.add('lista-nota__lista--deletada');
        alvo.style.transition ='all 0.6s ease-out';
        setTimeout(()=>{
              
            this.props.apagaNota(this.props.indice); 
            alvo.classList.remove('lista-nota__lista--deletada');
            alvo.style.transition ='all 0.0s ease-out';
        },600)     
     
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
                        onClick={this.apagar.bind(this)}
                    />
                    <h3 className='card-nota__titulo__categoria'>{this.props.categorias}</h3>

                </header>
                <p 
                    className="card-nota__nota">{this.props.texto}
                </p>
            </section>
        )
    }

}

export default CardNota;