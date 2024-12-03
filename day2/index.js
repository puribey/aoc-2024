const fs = require("fs");
const path = require("path");
const fileTxt = fs.readFileSync(path.join(__dirname, "input.txt"));
const inputFromAdvent = fileTxt.toString();

const parseInput = (input) => {
  return input
    .trim()
    .split("\n")
    .map((line) => line.split(" ").map(Number));
};

const isArrayIncreasingByUpToThree = (array) => {
  const len = array.length;
  if (len <= 1) return true;

  for (let i = 1; i < len; i++) {
    const diff = array[i] - array[i - 1];
    // if diff is 0 or greater than 3, return false
    if (diff <= 0 || diff > 3) return false;
  }
  return true;
};

const isArrayDecreasingByUpToThree = (array) => {
  const len = array.length;
  if (len <= 1) return true;

  for (let i = 1; i < len; i++) {
    const diff = array[i] - array[i - 1];
    // if diff is 0 or less than -3, return false
    if (diff >= 0 || diff < -3) return false;
  }
  return true;
};

const isArrayIncreasingOrDecreasingByUpToThree = (array) => {
  return (
    isArrayIncreasingByUpToThree(array) || isArrayDecreasingByUpToThree(array)
  );
};

const getSafeReportsTotal = (input) => {
  return input.filter((report) =>
    isArrayIncreasingOrDecreasingByUpToThree(report)
  ).length;
};

const main1 = () => {
  console.log(getSafeReportsTotal(parseInput(inputFromAdvent)));
};

const main2 = () => {};

module.exports = {
  parseInput,
  isArrayIncreasingOrDecreasingByUpToThree,
  getSafeReportsTotal,
};

main1();
// main2();
