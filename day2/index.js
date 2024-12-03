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
  return input.filter((report) => canMakeArraySafe(report)).length;
};

const canMakeArraySafe = (array) => {
  const len = array.length;

  for (let i = 0; i < len; i++) {
    // Create test array by spreading elements before and after current index
    const testArray = [...array.slice(0, i), ...array.slice(i + 1)];
    if (isArrayIncreasingOrDecreasingByUpToThree(testArray)) {
      return true;
    }
  }

  return false;
};

const main1 = () => {
  console.log(getSafeReportsTotal(parseInput(inputFromAdvent)));
};

const main2 = () => {};

module.exports = {
  parseInput,
  isArrayIncreasingOrDecreasingByUpToThree,
  getSafeReportsTotal,
  canMakeArraySafe,
};

// main1();
// main2();
