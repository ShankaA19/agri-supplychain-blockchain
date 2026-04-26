
const express = require('express');
const router = express.Router();
const { submitTransaction, evaluateTransaction } = require('../fabric/connection');

router.post('/', async (req, res) => {
  const { id, crop, farmer, quantity } = req.body;
  const result = await submitTransaction('createProduct', id, crop, farmer, quantity);
  res.json(JSON.parse(result));
});

router.put('/:id', async (req, res) => {
  const result = await submitTransaction('updateStatus', req.params.id, req.body.status);
  res.json(JSON.parse(result));
});

router.get('/:id', async (req, res) => {
  const result = await evaluateTransaction('getProduct', req.params.id);
  res.json(JSON.parse(result));
});

module.exports = router;
