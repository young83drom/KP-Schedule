import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <div className="list-card">
      <h3>Active Ledger Items</h3>
      {expenses.length === 0 ? (
        <p style={{ color: '#718096' }}>No active schedule expenses filed.</p>
      ) : (
        expenses.map((item) => (
          <div key={item.id} className="expense-item">
            <div className="expense-info">
              <span className="title">{item.title}</span>
              <span className="tag">{item.category}</span>
            </div>
            <div className="expense-action">
              <span className="amount">${item.amount}</span>
              <button onClick={() => onDeleteExpense(item.id)} className="delete-btn">✕</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
