const square = async (value) => {
  if (Math.round(Math.random())) {
    throw new Error('Someone is having a bad day!');
  }
  return Math.pow(parseInt(value, 10), 2);
};

module.exports = square;
