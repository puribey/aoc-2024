const {
  parseInput,
  isArrayIncreasingOrDecreasingByUpToThree,
  getSafeReportsTotal,
} = require("./index");

const exampleInput = `
7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9
`;

describe("Day 2", () => {
  test("parseInput", () => {
    expect(parseInput(exampleInput)).toEqual([
      [7, 6, 4, 2, 1],
      [1, 2, 7, 8, 9],
      [9, 7, 6, 2, 1],
      [1, 3, 2, 4, 5],
      [8, 6, 4, 4, 1],
      [1, 3, 6, 7, 9],
    ]);
  });
  test("isArrayIncreasingOrDecreasingByUpToThree", () => {
    expect(isArrayIncreasingOrDecreasingByUpToThree([7, 6, 4, 2, 1])).toBe(
      true
    );
    expect(isArrayIncreasingOrDecreasingByUpToThree([1, 2, 7, 8, 9])).toBe(
      false
    );
    expect(isArrayIncreasingOrDecreasingByUpToThree([9, 7, 6, 2, 1])).toBe(
      false
    );
    expect(isArrayIncreasingOrDecreasingByUpToThree([1, 3, 2, 4, 5])).toBe(
      false
    );
    expect(isArrayIncreasingOrDecreasingByUpToThree([8, 6, 4, 4, 1])).toBe(
      false
    );
    expect(isArrayIncreasingOrDecreasingByUpToThree([1, 3, 6, 7, 9])).toBe(
      true
    );
  });
  test("getSafeReports", () => {
    expect(getSafeReportsTotal(parseInput(exampleInput))).toEqual(2);
  });
});
