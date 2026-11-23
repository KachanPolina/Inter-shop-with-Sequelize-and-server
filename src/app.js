const express = require('express');
const cors = require('cors');
// ------------------------------
const router = require('./routers');
const {
  errorHandlers: { validationErrorHandler, errorHandler },
} = require('./middleware');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);
app.use(validationErrorHandler)
app.use(errorHandler)

module.exports = app;
