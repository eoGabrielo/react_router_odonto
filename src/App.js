//CSS - App.js
import './App.css';

//Componentes
import Topo from "./components/Topo/Topo.js"; 
import Rodape from "./components/Rodape/Rodape.js";

//Rotas
import Rotas from './components/Rotas';

function App() {
  return (
    <div className="App">
      <Topo />
      <Rotas />
      <Rodape />
    </div>
  );
}

export default App;
