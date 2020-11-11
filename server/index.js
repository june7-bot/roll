const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/chatbot/dialogflow', require('./chatbot/routes/dialogflow'));

const port = process.env.PORT || 5000;

app.listen(port);
