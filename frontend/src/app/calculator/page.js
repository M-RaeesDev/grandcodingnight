"use client"
import React, { useState } from "react";
// import { saveAs } from "file-saver";

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [monthlyPayment, setMonthlyPayment] = useState(null);

  const calculateMonthlyPayment = () => {
    if (loanAmount && interestRate && loanTerm) {
      const monthlyRate = interestRate / 100 / 12;
      const totalPayments = loanTerm * 12;
      const payment =
        (loanAmount * monthlyRate) /
        (1 - Math.pow(1 + monthlyRate, -totalPayments));

      setMonthlyPayment(payment.toFixed(2));
    }
  };

  const downloadCalculation = () => {
    if (monthlyPayment !== null) {
      const data = `Loan Amount: $${loanAmount}\nInterest Rate: ${interestRate}%\nLoan Term: ${loanTerm} years\nMonthly Payment: $${monthlyPayment}`;
      const blob = new Blob([data], { type: "text/plain;charset=utf-8" });
      saveAs(blob, "loan-calculation.txt");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Loan Calculator
        </h1>
        <div className="mb-4">
          <label htmlFor="loanAmount" className="block text-gray-700 font-medium mb-2">
            Loan Amount
          </label>
          <input
            type="number"
            id="loanAmount"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter loan amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interestRate" className="block text-gray-700 font-medium mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter annual interest rate"
            value={interestRate}
            onChange={(e) => setInterestRate(+e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="loanTerm" className="block text-gray-700 font-medium mb-2">
            Loan Term (years)
          </label>
          <input
            type="number"
            id="loanTerm"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter loan term in years"
            value={loanTerm}
            onChange={(e) => setLoanTerm(+e.target.value)}
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={calculateMonthlyPayment}
        >
          Calculate
        </button>
        {monthlyPayment && (
          <div className="mt-4 text-center">
            <p className="text-lg font-semibold text-gray-700">
              Monthly Payment: ${monthlyPayment}
            </p>
            <button
              className="mt-2 bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700"
              onClick={downloadCalculation}
            >
              Download Calculation
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanCalculator;
