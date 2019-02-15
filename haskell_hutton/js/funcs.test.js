const { valid, apply } = require('./funcs');

describe('tests', () => {
  test('apply works as expected', () => {
    expect(apply('Add', 1, 2)).toBe(3);
    expect(apply('Mul', 2, 2)).toBe(4);
  });

  test('valid', () => {
    expect(valid('Sub', 1, 2)).toEqual(false);
    expect(valid('Sub', 3, 1)).toEqual(true);
  });
});
