//Advent of code 2022 day 3
const  prob2Funcs = require('./index.js');
const myData = require("./puzzleinput02.js");


describe('Day 2 Rock Paper Scissors', () => {
  test('should test small sample data with the result of 15', () => {
    expect(prob2Funcs.decodeRPSEncryption(myData.testData)).toBe(15);
  });

  test("Should test the corrected decoding function and have a rustult of 12", () => {
    expect(prob2Funcs.correctDecodeRPSEncryption(myData.testData)).toBe(12);
  });
});