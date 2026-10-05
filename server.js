require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connect');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Post-Mission Planner API. Docs at /api-docs' });
});

app.use('/', require('./routes'));

// Malformed JSON body -> 400
app.use((err, req, res, next) => {
  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ message: 'Invalid JSON in request body' });
  }
  console.error(err);
  res.status(500).json({ message: 'Internal server error' });
});

// Unknown route -> 404
app.use((req, res) => res.status(404).json({ message: 'Route not found' }));

connectDB()
  .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
  .catch((err) => {
    console.error('Failed to start:', err.message);
    process.exit(1);
  });
