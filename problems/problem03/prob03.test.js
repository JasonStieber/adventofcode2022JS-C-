// Finding repeating characters in strings tests
const  prob3Funcs = require('./index.js');
const myData = require("./puzzleinput03.js");


describe('test for items in the wrong compartments', () => {
  test('should test small sample data with the result of 157', () => {
    expect(prob3Funcs.compareFullDataset(myData.testData)).toBe(157);
  });

  test("Should test the find the like groups and have a result 70", () => {
    expect(prob3Funcs.needStinkingBadges(myData.testData)).toBe(70);
  });
});