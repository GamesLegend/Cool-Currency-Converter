const inputUS = document.getElementById("input--us");
const inputUK = document.getElementById("input--uk");
const inputEurope = document.getElementById("input--europe");

const convertRates = new Map();
convertRates.set("usdToPound", 0.78);
convertRates.set("usdToEuro", 0.93);
convertRates.set("poundToUsd", 1.29);
convertRates.set("poundToEuro", 1.2);
convertRates.set("euroToPound", 0.83);
convertRates.set("euroToUsd", 1.08);

const convertCurrency = function (
  inputPrimary,
  inputSecondary,
  inputTertiary,
  rateKey,
  rateKey2
) {
  inputPrimary.addEventListener("input", function () {
    inputSecondary.value = inputPrimary.value * convertRates.get(rateKey);
    inputTertiary.value = inputPrimary.value * convertRates.get(rateKey2);
    if (inputPrimary.value === "") {
      inputSecondary.value = "";
      inputTertiary.value = "";
    }
  });
};

convertCurrency(inputUS, inputUK, inputEurope, "usdToPound", "usdToEuro");
convertCurrency(inputUK, inputUS, inputEurope, "poundToUsd", "poundToEuro");
convertCurrency(inputEurope, inputUK, inputUS, "euroToPound", "euroToUsd");
