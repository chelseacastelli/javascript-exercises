const ftoc = function(fahr) {
  return parseFloat(((fahr-32) * 5/9).toFixed(1));
};

const ctof = function(cel) {
  return parseFloat((cel * (9/5) + 32).toFixed(1));
};

module.exports = {
  ftoc,
  ctof
};
