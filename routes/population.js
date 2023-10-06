const { Router } = require("express");
const router = Router();
const { getPopulations, putPopulations } = require("../controllers/population");

const { secureAsync } =
  require("../middlewares/errorValidator").getErrorInstance();

router.get(
  "/api/population/state/:state/city/:city",
  secureAsync(getPopulations)
);

router.put(
  "/api/population/state/:state/city/:city",
  secureAsync(putPopulations)
);

module.exports = router;
