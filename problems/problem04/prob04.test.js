//Advent of code 2022 day 4
const prob4Funcs = require('./index.js');
const myData = require("./puzzleinput04.js");


describe('Day 4 Overlaping ranges', () => {
  test('should test small sample data with the result of 2', () => {
    expect(prob4Funcs.howManyOverlapping (myData.testData)).toBe(2);
  });

  test("Check any pairs of Elfs that overlap at all", () => {
    expect(prob4Funcs.anyPartOverlaps(myData.testData)).toBe(4);
  });
});