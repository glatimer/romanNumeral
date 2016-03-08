var romanNumeral = function(input) {
  var numeral = [];
  for (var i = 1; i <= input; i++) {
    numeral.push("I");
  if (input === 4) {
    numeral.push("IV")
    }
  return numeral;
  };
};
