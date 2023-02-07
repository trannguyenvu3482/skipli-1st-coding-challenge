const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const phoneRouter = require('./routes/phoneRouter');

app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Routes
app.use('/api', phoneRouter);

module.exports = app;
