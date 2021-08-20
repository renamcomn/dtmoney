import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { createServer } from 'miragejs';
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
    routes() {
      this.namespace = "api";

      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: "Transaction 1",
            amount: 500,
            type: "deposit",
            category: "Food",
            createdAt: new Date()
          }
        ]
      })
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
