import { useState } from 'react';
import Busca from './components/Busca';

const App = () => {
  const [listaPrevisoes, setListaPrevisoes] = useState([]);

  function aoRealizarBusca(lista) {
    setListaPrevisoes(lista);
  }

  return (
    <div>
      <Busca enviarResultadoBusca={aoRealizarBusca}/>
      <p>{listaPrevisoes[0]}</p>
    </div>
  )
}

export default App