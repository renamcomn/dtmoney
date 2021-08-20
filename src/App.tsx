import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { createServer } from 'miragejs';
import { useState } from 'react';
import Modal from 'react-modal';

export function App() {

  const [isOpenNewModalTransaction, SetIsOpenNewModalTransaction] = useState(false);

    function handleOpenNewTransactionModal() {
        SetIsOpenNewModalTransaction(true);
    }

    function handleCloseNewTransactionModal() {
        SetIsOpenNewModalTransaction(false);
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
      <Header onOpenNewTransactionModal= {handleOpenNewTransactionModal} />
      <Dashboard />
      <Modal
          isOpen={isOpenNewModalTransaction}
          onRequestClose={handleCloseNewTransactionModal}
          contentLabel="Example Modal"
      >
          <h2>Modal</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}
