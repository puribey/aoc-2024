const {
  parseInput,
  multiplyPairsTotal,
  parseAndMultiplyInput,
} = require("./index");

const exampleInput =
  "xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))";

const exampleInput2 =
  "xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))";

describe("Day 3 Part 1", () => {
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

describe("Day 3 Part 2", () => {
  test("parseAndMultiplyInput", () => {
    expect(parseAndMultiplyInput(exampleInput2)).toEqual(48);
  });
});
