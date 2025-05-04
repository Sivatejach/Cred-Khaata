import React from 'react';

// Sample customer data (replace this with real data from your backend)
const customers = [
  { name: 'John Doe', balance: 2000, dueDate: '2025-05-15' },
  { name: 'Jane Smith', balance: 500, dueDate: '2025-04-30' },
  { name: 'Alice Johnson', balance: 1500, dueDate: '2025-06-10' },
];

const calculateStatus = (dueDate) => {
    const today = new Date();
    const nextDueDate = new Date(dueDate);
    return nextDueDate < today ? 'Overdue' : 'Up-to-date';
  };
  

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Customer Dashboard</h1>
      <table className="dashboard-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Outstanding Balance</th>
            <th>Next Due Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>${customer.balance}</td>
              <td>{customer.dueDate}</td>
              <td>{calculateStatus(customer.dueDate)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
