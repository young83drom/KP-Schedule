import React, { useState } from 'react';
import Header from './components/Header';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Receipt from './components/Receipt';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, title: 'Server Fleet Allocation', amount: 450, category: 'Infrastructure' },
    { id: 2, title: 'Contractor Domain Setup', amount: 120, category: 'Consulting' }
  ]);

  const addExpense = (expense) => {
    setExpenses([...expenses, { ...expense, id: Date.now() }]);
  };

  const deleteExpense = (id) => {
    setExpenses(expenses.filter(item => item.id !== id));
  };

  const totalExpenditure = expenses.reduce((acc, curr) => acc + Number(curr.amount), 0);

  return (
    <div className="app-container">
      <Header />
      <div className="dashboard-layout">
        <div className="control-panel">
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
        </div>
        <div className="preview-panel">
          <Receipt total={totalExpenditure} count={expenses.length} />
        </div>
      </div>
    </div>
  );
}

export default App;
