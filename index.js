const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const Database = require("@replit/database");
const sdk = require('api')('@tokeninsight-api/v1.2.2#457nalf1vname');

const app = express();
// app.use(cors({ origin: 'https://chat.openai.com' }));
app.use(bodyParser.json());

// Keep track of todo's. Does not persist if the Node.js session is restarted.
const baseURL = "https://api.tokeninsight.com";
const ti_key = process.env['TI_API_KEY']
sdk.auth(ti_key);

app.get('/coinList', (req, res) => {
  sdk.getCoinsList({limit: '50'})
    .then(({ data }) => {
      const coinList = data.data
      res.status(200).json(coinList)
    })
    .catch(err => {
      res.status(400).json(err)
    });
});

app.post('/coinPrice', (req, res) => {
  sdk.getCoinsId({id: req.body.coinId})
    .then(({ data }) => {
      const coinData = data.data
      const coin = {
        id:coinData.id,
        name:coinData.name,
        market_data:coinData.market_data,
        tickers:coinData.tickers.slice(0,9)
      }       
      res.status(200).json(coin)
    })
    .catch(err => {
      res.status(400).json(err)
    });
});

app.get('/coinNews', (req, res) => {
  sdk.getNewsList({lang: 'en'})
    .then(({ data }) => {
      const newsList = data.data.list.map((news) => {const list = {
          title:news.title,
          url:news.url,
        }
        return list
      });
      res.status(200).json(newsList)
    })
    .catch(err => {
      res.status(400).json(err)
    });
});


app.get('/logo.png', (req, res) => {
  res.sendFile(path.join(__dirname, 'logo.png'));
});

app.get('/.well-known/ai-plugin.json', (req, res) => {
  res.sendFile(path.join(__dirname, '.well-known', 'ai-plugin.json'));
});

app.get('/openapi.yaml', (req, res) => {
  res.sendFile(path.join(__dirname, 'openapi.yaml'));
});

const main = () => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

main();