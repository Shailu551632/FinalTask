const express = require('express');
const app = express();
require('dotenv').config();
const UserRegrouter = require('./routes/MainRouter');
const conn = require('./config/connDB');

const port = process.env.PORT;

app.use(express.json());
app.use(UserRegrouter);

app.listen(port, () => {
    console.log(`Server started on ${port}`);
});