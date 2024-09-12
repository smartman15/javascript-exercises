const convertToCelsius = function(temperatureFahrenheit) {
  const formulaFahrenheit = (temperatureFahrenheit - 32) * (5/9);

  // the toFixed function rounds formulaFahrenheit to 1 decimal place
  // since toFixed turns the number into a string, 
  // the Number() method is used to turn it back into a number
  const roundedFahrenheit = Number(formulaFahrenheit.toFixed(1));
  return roundedFahrenheit;
};

const convertToFahrenheit = function(temperatureCelcius) {
  formulaCelcius = (temperatureCelcius * (9/5) + 32);
  roundedCelcius = Number(formulaCelcius.toFixed(1));
  return roundedCelcius;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
