const express = require('express');
const app = express();

app.use(express.json());
app.all('/json', (req, res) => {
  res.json({ data: 'data' });
});

module.exports = app;
