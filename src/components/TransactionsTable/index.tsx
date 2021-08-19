import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

interface transaction {
    id: string;
    title: string;
    amount: string;
    type: string;
    category: string;
    createdAt: string;
}

export function TransactionsTable() {

    const [transactions, setTransactions] = useState<transaction[]>([]);

    useEffect(() => {
        api.get('transactions')
        .then(response => 
            setTransactions(response.data)
        );
    }, []);

    return (
        <Container>
            <table>
                <thead>
                <tr>
                    <th>Título</th>
                    <th>Valor</th>
                    <th>Categoria</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction => {
                    return(
                        <tr>
                            <td>{transaction.title}</td>
                            <td>R$ {transaction.amount}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.createdAt}</td>
                        </tr>
                    )
                    })}
                </tbody>
            </table>
        </Container>
    );
}