const Op = {
  Add: (x, y) => x + y,
  Sub: (x, y) => x - y,
  Mul: (x, y) => x * y,
  Div: (x, y) => x / y
};

const Val = n => n;

const expr = (oper, x, y) => ({
  oper,
  x,
  y
});

const Expr = Val || expr;

const showVal = Val => console.log(Val);
const showExpr = (oper, left, right) => `(${left} ${oper} ${right})`;

module.exports = {
  Op,
  showVal,
  showExpr
};
