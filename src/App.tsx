import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { createServer, Model } from 'miragejs';
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
      setIsNewTransactionsModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
      setIsNewTransactionsModalOpen(false);
    }

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

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
    </>
  );
}
