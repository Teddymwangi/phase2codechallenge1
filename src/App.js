import React, { useState, useEffect } from 'react';
import TransactionTable from './components/TransactionTable';
import TransactionForm from './components/TransactionForm';
import SearchBar from './components/SearchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the server
    fetch('https://my-json-server.typicode.com/Teddymwangi/phase2codechallenge1/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data);
        setFilteredTransactions(data);
      });
  }, []);

  const handleAddTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
    setFilteredTransactions([...filteredTransactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    const filtered = transactions.filter((transaction) =>
      transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Bank Transactions App</h1>
      <SearchBar onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
      <TransactionForm onAddTransaction={handleAddTransaction} />
    </div>
  );
};

export default App;
