import { useState } from 'react';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './TransactionsContext';

import { GlobalStyle } from './styles/global';

export function App() {

  const [isNewTransactionsModalOpen, setIsNewTransactionsModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
      setIsNewTransactionsModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
      setIsNewTransactionsModalOpen(false);
    }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionsModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionsProvider>
  );
}
