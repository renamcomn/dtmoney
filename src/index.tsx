import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';


createServer({

  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          amount: 6000,
          category: 'Dev',
          createdAt: new Date('2021-08-16')
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          amount: 1600,
          category: 'Casa',
          createdAt: new Date('2021-08-20')
        },
      ]
    });
  },

  routes() {
    this.namespace = "api";

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions',  (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
