//Advent of code 2022 day 7
//  https://adventofcode.com/2022/day/7
const prob7Funcs = require('./index.js');
const myData = require("./puzzleinput07.js");

const desiredPrintString = `- / (dir)
  - a (dir)
    - e (dir)
      - i (file, size=584)
    - f (file, size=29116)
    - g (file, size=2557)
    - h.lst (file, size=62596)
  - b.txt (file, size=14848514)
  - c.dat (file, size=8504156)
  - d (dir)
    - j (file, size=4060174)
    - d.log (file, size=8033020)
    - d.ext (file, size=5626152)
    - k (file, size=7214296)\n`;

const rootNode = prob7Funcs.parseTerminalInput(myData.testInput);

describe('Day 7 Search traverse terminal output', () => {
  
  test("Test pretty print", () => {
    expect(rootNode.toString()).toBe(desiredPrintString);
  });

  test("Find the sum off all test directories with size less than 100000", () => {
    expect(prob7Funcs.sumDirectoriesWithMaxSizeX(rootNode, 100000)).toBe(95437)
  });
});