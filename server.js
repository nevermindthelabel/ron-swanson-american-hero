const express = require('express');
const mongoose = require('mongoose');
const Quote = require('./models/quotes')
const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(
  express.urlencoded({
    extended: true
  })
);

// Routes
app.get('/api/quotes', (req, res) => {
  Quote.find()
    .then(dbData => res.json(dbData))
    .catch(err => res.send(422).json(err))
});

app.post('/api/quotes', (req, res) => {
  Quote.create(req.body)
    .then(dbData => res.json(dbData))
    .catch(err => res.send(422).json(err))
});

// Database
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/ronswansonquotes'
);

const connection = mongoose.connection;

connection.once('open', function () {
  console.log('MongoDB database connection established successfully');
});

app.listen(PORT, () =>
  console.log(`💻  server listening on PORT http://localhost:${PORT} 👌`)
);
