import { GlobalStyle } from './styles/global';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';
import { createServer } from 'miragejs';

export function App() {

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
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
