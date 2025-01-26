import React, { useState } from "react";

const loanRequests = [
  { id: 1, title: "Wedding Loan", status: "Pending" },
  { id: 2, title: "Home Construction Loan", status: "Approved" },
  { id: 3, title: "Business Startup Loan", status: "Rejected" },
  { id: 4, title: "Education Loan", status: "Pending" },
];

const UserDashboard = () => {
  const [selectedLoan, setSelectedLoan] = useState(null);

  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-xl font-bold mb-6">Loan Requests</h2>
        <ul className="space-y-4">
          {loanRequests.map((loan) => (
            <li
              key={loan.id}
              className="cursor-pointer hover:bg-gray-700 p-2 rounded"
              onClick={() => setSelectedLoan(loan)}
            >
              {loan.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Sidebar */}
      <div className="flex-1 bg-gray-100 p-6">
        {selectedLoan ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{selectedLoan.title}</h2>
            <p className="text-lg">Status: {selectedLoan.status}</p>
            {/* You can add additional details or actions for the selected loan here */}
          </div>
        ) : (
          <p className="text-lg text-gray-600">Select a loan request to view details</p>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
