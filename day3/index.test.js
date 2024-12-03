const { parseInput, multiplyPairsTotal } = require("./index");

const exampleInput =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

describe("Day 3", () => {
  test("parseInput", () => {
    expect(parseInput(exampleInput)).toEqual([
      [2, 4],
      [5, 5],
      [11, 8],
      [8, 5],
    ]);
  });
  test("multiplyPairsTotal", () => {
    expect(multiplyPairsTotal(parseInput(exampleInput))).toEqual(161);
  });
});
