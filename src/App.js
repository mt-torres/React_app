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
    
    this.state = {notas:[]};
  }

  criarNota(titulo, texto){
    const novaNota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
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
          />
        </div>
        <div className="main__lista-notas">
          <ListaDeCategorias/>
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
