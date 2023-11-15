import React, { useState } from 'react';

const TransactionForm = ({ onAddTransaction }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate inputs if needed
    const newTransaction = { description, amount, date: new Date().toISOString() };
    onAddTransaction(newTransaction);
    // Reset form
    setDescription('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
