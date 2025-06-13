import { useState } from 'react';
import Busca from './components/Busca';
import ListaPrevisoes from './components/ListaPrevisoes';

const App = () => {
  const [listaPrevisoes, setListaPrevisoes] = useState(['',[]]);

  function aoRealizarBusca(lista) {
    setListaPrevisoes(lista);
  }

  return (
    <div className='flex justify-content-center'>
      <div className='w-8'>
        <div className='col-12'>
          <Busca enviarResultadoBusca={aoRealizarBusca}/>
        </div>

        <div className='flex-column col-12'>
          <h1>{listaPrevisoes[0]}</h1>
          <div className='flex flex-row justify-content-between flex-wrap row-gap-1'>
            <ListaPrevisoes previsoes={listaPrevisoes[1]}/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App