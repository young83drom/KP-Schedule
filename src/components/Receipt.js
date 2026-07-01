import React from 'react';
import './Receipt.css';

function Receipt({ total, count }) {
  const generatedTimestamp = new Date().toLocaleString();

  return (
    <div className="receipt-wrapper">
      <div className="receipt-header">
        <h2>KP SCHEDULE INC</h2>
        <small>STATEMENT SUMMARY RECEIPT</small>
      </div>
      <div className="receipt-row">
        <span>Timestamp:</span>
        <span>{generatedTimestamp}</span>
      </div>
      <div className="receipt-row">
        <span>Active Entries:</span>
        <span>{count} items</span>
      </div>
      <div className="receipt-row">
        <span>Tax Allocation:</span>
        <span>$0.00</span>
      </div>
      <div className="receipt-total-row">
        <span>AGGREGATE TOTAL:</span>
        <span>${total.toFixed(2)}</span>
      </div>
    </div>
  );
}

export default Receipt;
