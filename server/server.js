const express = require('express');
require('dotenv').config();
const controller = require('./controller');
const {SERVER_PORT} = process.env;

const app = express();

app.use(express.static(`${__dirname}/../build`));
app.use(express.json());



app.listen(SERVER_PORT, () => {
  console.log(`Server is listening on port ${SERVER_PORT}`)
})

app.post('/api/send', controller.sendMail);