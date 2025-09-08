const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DATA_PATH = path.join(__dirname, 'data', 'scores.json');

app.use(express.static('public'));
app.use(express.json());

app.get('/api/scores', (req, res) => {
  const rawData = fs.readFileSync(DATA_PATH);
  const scores = JSON.parse(rawData);
  res.json(scores.sort((a, b) => b.score - a.score));
});

app.post('/api/scores', (req, res) => {
  const { player, score, game } = req.body;
  const rawData = fs.readFileSync(DATA_PATH);
  const scores = JSON.parse(rawData);

  scores.push({ player, score, game });
  fs.writeFileSync(DATA_PATH, JSON.stringify(scores, null, 2));

  res.status(201).json({ message: 'Score saved' });
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));