const { parseInput, orderLists, getDistance, sumDistance } = require("./index");

const exampleInput = `
3   4
4   3
2   5
1   3
3   9
3   3
`;

describe("Day 1", () => {
  test("parseInput", () => {
    expect(parseInput(exampleInput)).toEqual([
      [3, 4, 2, 1, 3, 3],
      [4, 3, 5, 3, 9, 3],
    ]);
  });
  test("orderLists", () => {
    expect(orderLists(parseInput(exampleInput))).toEqual([
      [1, 2, 3, 3, 3, 4],
      [3, 3, 3, 4, 5, 9],
    ]);
  });
  test("getDistance", () => {
    expect(getDistance(parseInput(exampleInput))).toEqual([2, 1, 0, 1, 2, 5]);
  });
  test("sumDistance", () => {
    expect(sumDistance([2, 1, 0, 1, 2, 5])).toEqual(11);
  });
});
