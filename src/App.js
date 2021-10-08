import { Component } from 'react';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';
import '../src/assets/css/style.css'
import '../src/assets/css/index.css'

class App extends Component {
  render(){
    return (
      <section className="main">
        <div className="main__formulario-cadastro">
          <FormularioCadastro/>
        </div>
        <div className="main__lista-notas">
          <ListaDeNotas/>
        </div>

      </section>
    );

  }
}

export default App;
