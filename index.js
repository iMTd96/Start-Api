const express = require("express");
const app = express();
const populationRoute = require("./routes/population");
const bodyParser = require("body-parser");
const errorValidator =
  require("./middlewares/errorValidator").getErrorInstance();

const port = 5555;

app.use(errorValidator.errorResponder);
app.use(bodyParser.raw({ type: "*/*" }));

app.use("/", populationRoute);

app.listen(port, () => {
  console.log("server is runnig");
});
