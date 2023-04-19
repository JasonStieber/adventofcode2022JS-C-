//Advent of code 2022 day 5
const prob5Funcs = require('./index.js');
const myData = require("./puzzleinput05.js");

const testArray = [
    ['Z','N'],
    ['M','C','D'],
    ['P']
];

const singleMoveSolution = [
    ['Z',"N","D"],
    ["M","C"],
    ["P"]
];

const singleInstruction = {numOfBoxes: 1, from: 2, to: 1};

describe('Day 5 Overlaping ranges', () => {
  test('should test small stacks movement instruction', () => {
    expect(prob5Funcs.moveAllTheBoxes(myData.testStack, myData.testInstructions)).toBe("CMZ");
  });

  test("Shoudl test a small stack to see if the moxmover 9001 works as intended",() => {
    expect(prob5Funcs.moveWithCrateMover9001(myData.testStack, myData.testInstructions)).toBe("MCD");
  });
  
  test("check to see if the parsing function returns a array of arrays of Letters", () => {
    expect(prob5Funcs.parseStack(myData.testStack)).toStrictEqual(testArray);
  });

  test("checks if that a single instruciton to move a single box works", () => {
    expect(prob5Funcs.doAnInstruction(testArray,singleInstruction)).toStrictEqual(singleMoveSolution);
  });
});