require('dotenv').config();
const axios = require('axios');
const cors = require('cors');
const express = require('express');
const app = express();

const PORT = 3000;
const API_URL = 'http://api.openweathermap.org/data/2.5/forecast';
const API_KEY = process.env.OPEN_WEATHER_KEY;

app.use(cors());

app.get('/busca', async (req, res) => {
  const nomeCidade = req.query.nome_cidade;
  const qtdPrevisoesMeteorologicas = req.query.qtd_previsoes;

  const resposta = await axios.get(API_URL, {
    params: {
      q: nomeCidade,
      cnt: qtdPrevisoesMeteorologicas,
      lang: 'pt_br',
      units: 'metric',
      appid: API_KEY,
    }
  });

  const listaPrevisoes = resposta.data.list
    .map((previsao) => {
      return {
        data: previsao.dt_txt,
        descricao: previsao.weather[0].description,
        humidade_ar: previsao.main.humidity,
        icone: previsao.weather[0].icon,
        temp_max: previsao.main.temp_max,
        temp_min: previsao.main.temp_min,
      }
    });

  res.json(listaPrevisoes);
});

app.listen(PORT, () => console.log(`Backend subiu na porta ${PORT}!`));