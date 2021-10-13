import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import '../src/assets/css/reset.css';
import '../src/assets/css/style.css';
import '../src/assets/css/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';
import Categorias from './dados/Categorias.js';
import ArrayNotas from './dados/ArrayNotas.js';

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayNotas();
  }



  render(){
    return (
      <section className="main">
        <div className="main__formulario-cadastro">
          <FormularioCadastro 
            categorias={this.categorias.categorias}
            criarNota={this.notas.adicionarNota}
          />
        </div>
        <div className="main__lista-notas">
          <ListaDeCategorias
            categorias={this.categorias.categorias}
            adicionarCategoria= {this.categorias.adicionarCategoria}

            />
          <ListaDeNotas 
            apagaNota= {this.notas.apagarNota}
            notas ={this.notas.notas}
          />
        </div>
      </section>
    );

  }
}

export default App;
