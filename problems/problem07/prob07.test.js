//Advent of code 2022 day 7
//  https://adventofcode.com/2022/day/7
const prob6Funcs = require('./index.js');
const myData = require("./puzzleinput07.js");

describe('Day 7 Search for directory size assessment', () => {
  
  test("Test optimized solution with new function should return 7", () => {
    expect(prob6Funcs.locateUniqueSubset(myData.testString1,4)).toBe(7);
  });
};