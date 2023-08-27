const convertToCelsius = function(temp) {
  let celsiusTemp = 0;
  celsiusTemp += ((temp - 32) * 5) / 9
  return Math.round(celsiusTemp * 10) / 10
};

const convertToFahrenheit = function(temp) {
  let farenheitTemp = 0;
  farenheitTemp = temp * 1.8 + 32;
  return Math.round(farenheitTemp * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
