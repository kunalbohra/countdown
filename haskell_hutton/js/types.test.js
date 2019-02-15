const { showExpr } = require('./types');

describe('tests', () => {
  xtest('showExpr', () => {
    expect(showExpr('Add', 1, 2)).toBe(`1+2`);
  });
});
