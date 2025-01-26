"use client"
import React, { useState } from "react";

// Sample Loan Requests Data
const loanRequests = [
  { id: 1, title: "Wedding Loan", status: "Pending", user: "John Doe", amount: "$5000" },
  { id: 2, title: "Home Construction Loan", status: "Approved", user: "Jane Smith", amount: "$20000" },
  { id: 3, title: "Business Startup Loan", status: "Rejected", user: "Michael Johnson", amount: "$10000" },
  { id: 4, title: "Education Loan", status: "Pending", user: "Emily Davis", amount: "$7000" },
];

const AdminPanel = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [loanStatus, setLoanStatus] = useState("");

  const handleStatusChange = (id, status) => {
    const updatedLoans = loanRequests.map((loan) =>
      loan.id === id ? { ...loan, status: status } : loan
    );
    setLoanStatus(status);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-6">Admin Panel</h2>
        <nav>
          <ul className="space-y-4">
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Dashboard</li>
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">Loan Requests</li>
            <li className="cursor-pointer hover:bg-gray-700 p-2 rounded">User Management</li>
          </ul>
        </nav>
      </div>

      {/* Main Content (Right Side) */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Dashboard Overview */}
        <div className="mb-6">
          <h3 className="text-3xl font-semibold text-gray-800">Dashboard Overview</h3>
          <div className="grid grid-cols-3 gap-6 mt-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Total Loans</h4>
              <p className="text-xl text-gray-800">4</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Pending Loans</h4>
              <p className="text-xl text-gray-800">2</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h4 className="font-semibold text-gray-700">Approved Loans</h4>
              <p className="text-xl text-gray-800">1</p>
            </div>
          </div>
        </div>

        {/* Loan Requests Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Loan Requests</h3>
          <table className="min-w-full table-auto">
            <thead>
              <tr className="text-left bg-gray-200">
                <th className="px-4 py-2">Loan Title</th>
                <th className="px-4 py-2">User</th>
                <th className="px-4 py-2">Amount</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {loanRequests.map((loan) => (
                <tr key={loan.id} className="border-b">
                  <td className="px-4 py-2">{loan.title}</td>
                  <td className="px-4 py-2">{loan.user}</td>
                  <td className="px-4 py-2">{loan.amount}</td>
                  <td className="px-4 py-2">{loan.status}</td>
                  <td className="px-4 py-2">
                    <button
                      onClick={() => setSelectedLoan(loan)}
                      className="bg-indigo-600 text-white py-1 px-3 rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Loan Details Section */}
        {selectedLoan && (
          <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">{selectedLoan.title}</h3>
            <div className="space-y-4">
              <p><strong>User:</strong> {selectedLoan.user}</p>
              <p><strong>Loan Amount:</strong> {selectedLoan.amount}</p>
              <p><strong>Status:</strong> {selectedLoan.status}</p>

              <div className="flex space-x-4">
                <button
                  onClick={() => handleStatusChange(selectedLoan.id, "Approved")}
                  className="bg-green-600 text-white py-2 px-4 rounded"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(selectedLoan.id, "Rejected")}
                  className="bg-red-600 text-white py-2 px-4 rounded"
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
