// routes/loanRequests.js
import express from 'express';
import LoanRequest from '../models/loanRequest.js';

const router = express.Router();

// Get all loan requests
router.get('/', async (req, res) => {
  try {
    const loans = await LoanRequest.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan requests' });
  }
});

// Get a specific loan request by ID
router.get('/:id', async (req, res) => {
  try {
    const loan = await LoanRequest.findById(req.params.id);
    if (!loan) {
      return res.status(404).json({ message: 'Loan request not found' });
    }
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan request' });
  }
});

// Update loan request status
router.put('/:id', async (req, res) => {
  const { status } = req.body;
  try {
    const loan = await LoanRequest.findByIdAndUpdate(req.params.id, { status }, { new: true });
    if (!loan) {
      return res.status(404).json({ message: 'Loan request not found' });
    }
    res.status(200).json(loan);
  } catch (error) {
    res.status(500).json({ message: 'Error updating loan status' });
  }
});

export default router;
