const fs = require("fs");
const path = require("path");
const fileTxt = fs.readFileSync(path.join(__dirname, "inputDayOne.txt"));
const inputFromAdvent = fileTxt.toString();

const parseInput = (input) => {
  const parsedInput = input
    .trim()
    .split("\n")
    .reduce(
      (acc, item) => {
        const [first, second] = item.split(" ").filter(Boolean);
        acc[0].push(Number(first));
        acc[1].push(Number(second));
        return acc;
      },
      [[], []]
    );

  return parsedInput;
};

const orderLists = (input) => {
  const [first, second] = input;
  const orderedFirst = first.sort((a, b) => a - b);
  const orderedSecond = second.sort((a, b) => a - b);
  return [orderedFirst, orderedSecond];
};

const getDistance = (input) => {
  const distanceArray = [];
  const [first, second] = orderLists(input);
  for (let i = 0; i < first.length; i++) {
    distanceArray.push(Math.abs(first[i] - second[i]));
  }

  return distanceArray;
};

const sumDistance = (input) => {
  return input.reduce((acc, item) => acc + item, 0);
};

const getTotalDistance = (input) => {
  const [arrayA, arrayB] = input
    .trim()
    .split("\n")
    .reduce(
      (acc, line) => {
        const [a, b] = line.match(/\S+/g).map(Number);
        acc[0].push(a);
        acc[1].push(b);
        return acc;
      },
      [[], []]
    );

  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  return arrayA.reduce((total, a, index) => {
    return total + Math.abs(a - arrayB[index]);
  }, 0);
};

const main = () => {
  console.log(getTotalDistance(inputFromAdvent));
};

module.exports = {
  parseInput,
  orderLists,
  getDistance,
  sumDistance,
  getTotalDistance,
};

// main();
