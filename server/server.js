const express = require('express');
require('dotenv').config();
const app = express();

const {SERVER_PORT} = process.env;

app.use(express.json());




app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`)
})
