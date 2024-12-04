const fs = require("fs");
const path = require("path");
const fileTxt = fs.readFileSync(path.join(__dirname, "input.txt"));
const inputFromAdvent = fileTxt.toString();

const parseInput = (input) => {
  // want to take only between () and comma inside after mul. Eg mul(2,4) 2,4
  const regex = /mul\((\d+),(\d+)\)/g;
  const matches = input.match(regex);
  return matches.map((match) => match.slice(4, -1).split(",").map(Number));
};

const parseAndMultiplyInput = (input) => {
  return input
    .split("do()") // split into chunks
    .map((chunk) => chunk.split("don't()")[0]) // remove don't()
    .map((s) => [...s.matchAll(/mul\((\d+),(\d+)\)/g)]) // find all mul pairs
    .flatMap((m) => m.map((m) => m[1] * m[2])) // multiply pairs
    .reduce((acc, curr) => acc + curr, 0); // sum up
};

const multiplyPairsTotal = (pairs) => {
  return pairs.reduce((acc, pair) => acc + pair[0] * pair[1], 0);
};

const main1 = () => {
  console.log(multiplyPairsTotal(parseInput(inputFromAdvent)));
};

const main2 = () => {
  console.log(parseAndMultiplyInput(inputFromAdvent));
};

module.exports = { parseInput, multiplyPairsTotal, parseAndMultiplyInput };

// main1();
main2();
