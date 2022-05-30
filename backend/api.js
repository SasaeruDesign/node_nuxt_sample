const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require('date-utils');

const fs = require("fs");
process.on('uncaughtException', function(err) {
    console.log(err);
});

// ルーティング用
const test_router = require('./routes/test');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/test', test_router);


app.listen(3001);