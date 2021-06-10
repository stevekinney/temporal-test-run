const double = require('../activities/double.js');
const square = require('../activities/square.js');

const main = async (number) => {
  const doubled = await double(number);
  const result = await square(doubled);

  return result;
};

module.exports = { main };
