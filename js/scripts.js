
var romanNumeral = function(input) {
  var numeral = [];
  if (input === 4) {
   numeral = ("IV")
  }
  for (var i = 1; i <= input; i++) {
    numeral.push("I");
  };
  return numeral;
};
