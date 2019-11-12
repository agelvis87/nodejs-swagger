const express = require("express");

const app = express();

// Declare server directory
process.env.SERVER_DIR = __dirname;

app.use(require("./config/swagger"));
app.use(require("./routes/customer"));

app.listen(3000, () => console.log(`App listening on port 3000`));

