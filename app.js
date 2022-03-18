const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connection');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middlware
app.use(express.static('./public'));
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager App');
})

app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);  
    app.listen(port, () => console.log(`Server was started on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();

