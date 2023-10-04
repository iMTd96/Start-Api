const express = require("express");
const app = express();
const populationRoute = require("./routes/population");
const port = 5555;

app.use("/", populationRoute);

app.listen(port, () => {
  console.log("server is runnig");
});
