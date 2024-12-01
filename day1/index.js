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

const main = () => {
  const parsedInput = parseInput(inputFromAdvent);
  const distance = getDistance(parsedInput);
  const totalDistance = sumDistance(distance);
  console.log(totalDistance);
};

module.exports = { parseInput, orderLists, getDistance, sumDistance };

main();
