const fs = require("fs");

// Función para leer un archivo CSV
function getPopulation(archivo, cityQ, state) {
  return new Promise((resolve, reject) => {
    fs.readFile(archivo, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const lineas = data.trim().split("\n");
      const datosCSV = lineas.map((linea) => linea.split(","));
      console.log(datosCSV);
      datosCSV.map((city) => {
        if (city[0] === cityQ && city[1] === state) {
          resolve(`population: ${city[2].replace("\r", "")}`);
        }
      });
      resolve("NOT Found");
    });
  });
}

// Función para escribir datos en un archivo CSV
function updatePopulation(archivo, cityQ, state, population) {
  return new Promise((resolve, reject) => {
    fs.readFile(archivo, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const lineas = data.trim().split("\n");
      const datosCSV = lineas.map((linea) => linea.split(","));
      datosCSV.map((city) => {
        if (city[0] === cityQ && city[1] === state) {
          city[2] = `${population}\r`;
        }
      });
      const ans = datosCSV.toString().replaceAll("\r,", "\r");
      resolve(ans);

      fs.writeFile(archivo, ans, "utf8", (error) => {});
    });
  });
}

module.exports = { getPopulation, updatePopulation };
