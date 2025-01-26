// models/LoanRequest.js
import mongoose from 'mongoose';

const loanRequestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: 'Pending',
  },
}, { timestamps: true });

const LoanRequest = mongoose.model('LoanRequest', loanRequestSchema);
export default LoanRequest;
