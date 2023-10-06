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
      datosCSV.map((city) => {
        if (city[0] === cityQ && city[1] === state) {
          resolve({ population: city[2].replace("\r", "") });
        }
      });
      resolve("error");
    });
  });
}

function updatePopulation(archivo, cityQ, state, population) {
  let flag = true;
  return new Promise((resolve, reject) => {
    fs.readFile(archivo, "utf8", (error, data) => {
      if (error) {
        reject(error);
        return;
      }
      const lineas = data.trim().split("\n");
      const datosCSV = lineas.map((linea) =>
        linea.replace("\r", "").split(",")
      );
      console.log(datosCSV);
      datosCSV.map((city) => {
        if (city[0] === cityQ && city[1] === state) {
          city[2] = `${population}\r`;
          flag = false;
        }
      });
      if (flag) {
        datosCSV.push([cityQ, state, population]);
      }
      let output = "";
      datosCSV.map(
        (linea) =>
          (output += `${linea[0].toString()},${linea[1].toString()},${linea[2].toString()}\n`)
      );
      resolve(!flag ? "updated" : "added");

      fs.writeFile(archivo, output, "utf8", (error) => {});
    });
  });
}

module.exports = { getPopulation, updatePopulation };
