import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import '../src/assets/css/style.css'
import '../src/assets/css/index.css'

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

  render(){
    return (
      <section className="main">
        <div className="main__formulario-cadastro">
          <FormularioCadastro criarNota={this.criarNota.bind(this)}/>
        </div>
        <div className="main__lista-notas">
          <ListaDeNotas notas ={this.state.notas}/>
        </div>

      </section>
    );

  }
}

export default App;
