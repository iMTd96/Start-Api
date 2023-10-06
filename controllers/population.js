const { getPopulation, updatePopulation } = require("../services/adminDB");

async function getPopulations(req, res) {
  const { state, city } = req.params;
  console.log(state, city);
  const solve = await getPopulation("./wareHouse/data.csv", city, state);
  if (solve === "error") {
    return res.status(400).json(
      new ApiError({
        clientErrorMessage: "Ciudad no encontrada",
        debugErrorMessage: "CITY_NOT_FOUND",
      })
    );
  }
  return res.status(200).json(solve);
}

async function putPopulations(req, res) {
  const { state, city } = req.params;
  const population = req.body.toString();
  console.log(state, city, population);
  const solve = await updatePopulation(
    "./wareHouse/data.csv",
    city,
    state,
    population
  );

  return res.status(solve === "added" ? 201 : 200).json();
}

module.exports = { getPopulations, putPopulations };
