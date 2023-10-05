const { Router } = require("express");
const router = Router();
const { getPopulation, updatePopulation } = require("../services/adminDB");
router.get("/api/population/state/:state/city/:city", async (req, res) => {
  const { state, city } = req.params;
  console.log(state, city);
  return res.json(await getPopulation("./wareHouse/data.csv", city, state));
});

router.put("/api/population/state/:state/city/:city", async (req, res) => {
  const { state, city } = req.params;
  const population = req.body.toString();
  console.log(state, city, population);
  return res.json(
    await updatePopulation("./wareHouse/data.csv", city, state, population)
  );
});

module.exports = router;
