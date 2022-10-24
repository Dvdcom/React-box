import logo from './logo.svg';

import './App.css';
import Primerdiv from './componentes/Primerdiv';
import Footers from './componentes/Footers';
import Cuadraditos from './componentes/Cuadraditos';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Practica <code>React</code> creando cuadraditos.</p>
      </header>
      <main>
        <Primerdiv />
        <Cuadraditos />
      </main>
      <footer>
        <Footers />
      </footer>
    </div>
  );
}

export default App;

