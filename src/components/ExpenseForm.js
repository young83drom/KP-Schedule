import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Infrastructure');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    onAddExpense({ title, amount, category });
    setTitle('');
    setAmount('');
  };

  return (
    <div className="form-card">
      <h3>Assign New Schedule Cost</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Item Description</label>
          <input 
            type="text" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            placeholder="e.g. API License Renewals"
          />
        </div>
        <div className="form-group">
          <label>Cost Amount ($)</label>
          <input 
            type="number" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
            placeholder="0.00"
          />
        </div>
        <div className="form-group">
          <label>Operational Group</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Infrastructure">Infrastructure</option>
            <option value="Consulting">Consulting</option>
            <option value="Marketing">Marketing</option>
            <option value="Logistics">Logistics</option>
          </select>
        </div>
        <button type="submit" className="submit-btn">Log Transaction</button>
      </form>
    </div>
  );
}

export default ExpenseForm;
