import React from 'react';
import striptags from 'striptags';
import { Card } from 'primereact/card';

const ListaPrevisoes = ({ previsoes }) => {
  return (
    previsoes.map((previsao, index) => {
      if(previsao){
        return (
          <Card key={index} className='text-center w-10rem'>
            <img src={`https://openweathermap.org/img/wn/${striptags(previsao.icone)}@2x.png`} />
            <p className='flex flex-wrap justify-content-center gap-3'>
              <span className='font-bold'>{Math.round(previsao.temp_max)}°</span>
              <span>{Math.round(previsao.temp_min)}°</span>
            </p>
            <p className='text-sm'>Umidade {Math.round(previsao.humidade_ar)}%</p>
            <p className='font-bold'>{striptags(previsao.descricao)}</p>
          </Card>
        )
      }
    })
  )
}

export default ListaPrevisoes;