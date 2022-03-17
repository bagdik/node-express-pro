const express = require('express');
const tasks = require('./routes/tasks');
const app = express();
const connectDB = require('./db/connection');
require('dotenv').config();

// middlware
app.use(express.json());

// routes
app.get('/hello', (req, res) => {
  res.send('Task manager App');
})

app.use('/api/v1/tasks', tasks);


const port = 3000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URI);  
    app.listen(port, () => console.log(`Server was started on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
}

start();

