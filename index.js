const express = require('express');
const { resolve } = require('path');
let cors = require('cors');

const app = express();
const port = 3010;

app.use(express.static('static'));
app.use(cors());

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

// Endpoint 1: Calculate the Returns of the Stocks added
app.get('/calculate-returns', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const marketPrice = parseFloat(req.query.marketPrice);
  const quantity = parseInt(req.query.quantity);

  if (isNaN(boughtAt) || isNaN(marketPrice) || isNaN(quantity)) {
    return res.status(400).send('Invalid input');
  }

  const returns = (marketPrice - boughtAt) * quantity;
  res.send(`${returns}`);
});

// Endpoint 2: Calculate the Total Returns
app.get('/total-returns', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  if ([stock1, stock2, stock3, stock4].some(isNaN)) {
    return res.status(400).send('Invalid input');
  }

  const totalReturns = stock1 + stock2 + stock3 + stock4;
  res.send(`${totalReturns}`);
});

// Endpoint 3: Calculate the Return Percentage
app.get('/calculate-return-percentage', (req, res) => {
  const boughtAt = parseFloat(req.query.boughtAt);
  const returns = parseFloat(req.query.returns);

  if (isNaN(boughtAt) || isNaN(returns)) {
    return res.status(400).send('Invalid input');
  }

  const returnPercentage = (returns / boughtAt) * 100;
  res.send(`${returnPercentage}`);
});

// Endpoint 4: Calculate the Total Return Percentage
app.get('/total-return-percentage', (req, res) => {
  const stock1 = parseFloat(req.query.stock1);
  const stock2 = parseFloat(req.query.stock2);
  const stock3 = parseFloat(req.query.stock3);
  const stock4 = parseFloat(req.query.stock4);

  if ([stock1, stock2, stock3, stock4].some(isNaN)) {
    return res.status(400).send('Invalid input');
  }

  const totalReturnPercentage = stock1 + stock2 + stock3 + stock4;
  res.send(`${totalReturnPercentage}`);
});

// Endpoint 5: Identify the Status of Stocks based on their Return Value
app.get('/status', (req, res) => {
  const returnPercentage = parseFloat(req.query.returnPercentage);

  if (isNaN(returnPercentage)) {
    return res.status(400).send('Invalid input');
  }

  const status = returnPercentage > 0 ? 'Profit' : 'Loss';
  res.send(`${status}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
