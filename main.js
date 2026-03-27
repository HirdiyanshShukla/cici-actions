const express = require('express');
const app = express();

app.use(express.json());

// Helper middleware to valid numeric inputs
const validateNumbers = (req, res, next) => {
  const { a, b } = req.query;
  if (a === undefined || b === undefined) {
    return res.status(400).json({ error: 'Please provide both "a" and "b" query parameters.' });
  }
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  if (isNaN(numA) || isNaN(numB)) {
    return res.status(400).json({ error: 'Both "a" and "b" must be valid numbers.' });
  }

  req.numbers = { a: numA, b: numB };
  next();
};

app.get('/add', validateNumbers, (req, res) => {
  const result = req.numbers.a + req.numbers.b;
  res.json({ result });
});

app.get('/subtract', validateNumbers, (req, res) => {
  const result = req.numbers.a - req.numbers.b;
  res.json({ result });
});

app.get('/multiply', validateNumbers, (req, res) => {
  const result = req.numbers.a * req.numbers.b;
  res.json({ result });
});

app.get('/divide', validateNumbers, (req, res) => {
  if (req.numbers.b === 0) {
    return res.status(400).json({ error: 'Cannot divide by zero.' });
  }
  const result = req.numbers.a / req.numbers.b;
  res.json({ result });
});

// Start the server only if this file is run directly (not through tests)
if (require.main === module) {
  const PORT = process.env.PORT || 8000;
  app.listen(PORT, () => {
    console.log(`Calculator API server is running on port ${PORT}`);
  });
}

// Export the app for testing
module.exports = app;