import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar'; // ✅ Navbar added
import './index.css';
import { FaExclamationCircle } from 'react-icons/fa';

const Dashboard = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const mockData = [
      {
        id: 1,
        name: 'Ravi Kumar',
        balance: 5000,
        dueDate: '2025-04-15',
      },
      {
        id: 2,
        name: 'Meena Shah',
        balance: 0,
        dueDate: '2025-06-10',
      },
      {
        id: 3,
        name: 'Akhil Dev',
        balance: 1500,
        dueDate: '2025-03-20',
      },
    ];
    setCustomers(mockData);
  }, []);

  const isOverdue = (dueDate) => new Date(dueDate) < new Date();

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar /> {/* ✅ Visible only on authenticated pages */}
      <div className="dashboard-container p-6">
        <h2 className="text-3xl font-bold mb-6">Customer Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {customers.map((customer) => {
            const overdue = isOverdue(customer.dueDate);

            return (
              <div
                key={customer.id}
                className={`p-4 border rounded-xl shadow ${
                  overdue ? 'bg-red-100 border-red-400' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold">{customer.name}</h3>
                  {overdue && (
                    <FaExclamationCircle
                      className="text-red-600"
                      title="Overdue"
                    />
                  )}
                </div>
                <p>Outstanding Balance: ₹{customer.balance}</p>
                <p>
                  Due Date:{' '}
                  <span
                    className={overdue ? 'text-red-600 font-semibold' : ''}
                  >
                    {customer.dueDate}
                  </span>
                </p>
                <p>Status: {overdue ? 'Overdue' : 'Up-to-date'}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
