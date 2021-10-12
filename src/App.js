import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import '../src/assets/css/reset.css';
import '../src/assets/css/style.css';
import '../src/assets/css/index.css';
import ListaDeCategorias from './components/ListaDeCategorias/ListaDeCategorias';

class App extends Component {

  constructor(){
    super();
    
    this.state = {
      notas: [],
      categorias: [],
    };
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota];
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)
  }

  criaCategoria(nomeCategoria){
    const novoArrayCategorias = [...this.state.categorias,nomeCategoria];
    const novoEstado = {...this.state, categorias: novoArrayCategorias }
    this.setState(novoEstado)
  }

  deletaNota(index){
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index,1);
    this.setState({notas:arrayNotas});
  }

  render(){
    return (
      <section className="main">
        <div className="main__formulario-cadastro">
          <FormularioCadastro 
            criarNota={this.criarNota.bind(this)}
            categorias={this.state.categorias}
          />
        </div>
        <div className="main__lista-notas">
          <ListaDeCategorias
            adicionarCategoria= {this.criaCategoria.bind(this)}
            categorias={this.state.categorias}

            />
          <ListaDeNotas 
            apagaNota= {this.deletaNota.bind(this)}
            notas ={this.state.notas}
          />
        </div>
      </section>
    );

  }
}

export default App;
