const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json({ type: "application/json" }));



app.listen(3000, () => {
    console.log("3000 server started");
  });
  