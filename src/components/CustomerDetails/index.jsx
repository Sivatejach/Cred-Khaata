import React, { useEffect, useState } from 'react';
import './index.css';
import { useParams } from 'react-router-dom';

const CustomerDetail = () => {
  const { customerId } = useParams();
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    // Fetch or mock the data based on customerId
    const fetchCustomerData = async () => {
      // Replace with actual API call or mock data
      const mockData = {
        name: 'John Doe',
        transactions: [
          {
            id: 1,
            item: 'Mobile Phone',
            loanAmount: 10000,
            dueDate: '2025-06-01',
            repayments: [
              { date: '2025-05-01', amount: 2000 },
              { date: '2025-05-15', amount: 3000 },
            ],
          },
        ],
      };
      setCustomerData(mockData);
    };

    fetchCustomerData();
  }, [customerId]);

  if (!customerData) return <div>Loading...</div>;

  return (
    <div className="customer-detail">
      <h2>{customerData.name}'s Credit Details</h2>
      {customerData.transactions.map((txn) => {
        const totalPaid = txn.repayments.reduce((sum, r) => sum + r.amount, 0);
        const balance = txn.loanAmount - totalPaid;

        return (
          <div key={txn.id} className="transaction-card">
            <p><strong>Item Sold:</strong> {txn.item}</p>
            <p><strong>Loan Amount:</strong> ₹{txn.loanAmount}</p>
            <p><strong>Due Date:</strong> {txn.dueDate}</p>
            <p><strong>Remaining Balance:</strong> ₹{balance}</p>
            <div>
              <strong>Repayment History:</strong>
              <ul>
                {txn.repayments.map((rep, index) => (
                  <li key={index}>
                    ₹{rep.amount} paid on {rep.date}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerDetail;
