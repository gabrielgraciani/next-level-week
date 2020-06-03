import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  res.json([
    'diego',
    'gabriel',
    'robsonqwe'
  ]);
});

app.listen(3333);