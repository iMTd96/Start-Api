const express = require("express");
const app = express();
const populationRoute = require("./routes/population");
const bodyParser = require("body-parser");

const port = 5555;

app.use(bodyParser.raw({ type: "*/*" }));
app.use("/", populationRoute);

app.listen(port, () => {
  console.log("server is runnig");
});
