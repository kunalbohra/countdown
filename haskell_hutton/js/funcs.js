const { Op } = require('./types');

const ValidOperations = {
  Add: () => true,
  Sub: (x, y) => x > y,
  Mul: () => true,
  Div: (x, y) => x % y === 0
};

const valid = (oper, x, y) =>
  ValidOperations[oper] ? ValidOperations[oper](x, y) : false;

const apply = (oper, x, y) => valid(oper, x, y) && Op[oper](x, y);

module.exports = {
  valid,
  apply
};
