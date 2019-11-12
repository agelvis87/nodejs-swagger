const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Declare server directory
process.env.SERVER_DIR = __dirname;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(require("./config/swagger"));
app.use(require("./routes/customer"));

app.listen(3000, () => console.log(`App listening on port 3000`));
