const { Router } = require("express");
const router = Router();

router.get("/api/population/state/:state/city/:city", (req, res) => {
  return res.json({ pepe: "lol" });
});

router.put("/api/population/state/:state/city/:city", (req, res) => {
  return res.json({ pepe: "lol" });
});

module.exports = router;
