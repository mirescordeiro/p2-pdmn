import React, { useEffect, useState } from 'react';
import backendClient from '../utils/backendClient'

const Busca = ({ enviarResultadoBusca }) => {
  const [termoDeBusca, setTermoDeBusca] = useState('São Paulo');
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const fazerBusca = async () => {
      const { data } = await backendClient.get('/busca', {
        params: {
          nome_cidade: termoDeBusca,
          qtd_previsoes: 6
        }
      });
      setResultados(data);
      enviarResultadoBusca([termoDeBusca, data]);
    };

    if(termoDeBusca && resultados.length === 0){
      fazerBusca();
    } else {
      const timeoutID = setTimeout(() => {
        if(termoDeBusca && termoDeBusca.length >= 3){
          fazerBusca();
        }
      }, 2000);

      return () => {
        clearTimeout(timeoutID);
      }
    }
  }, [termoDeBusca]);

  // Estilização retirada de 'primereact/inputtext/inputtext.esm.js'
  return (
    <div>
      <input
        type="text"
        placeholder={termoDeBusca}
        className='p-inputtext p-component w-full'
        onChange={(e) => {setTermoDeBusca(e.target.value)}}
        value={termoDeBusca}
      />
    </div>
  )
}

export default Busca;