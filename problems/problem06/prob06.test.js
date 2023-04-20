//Advent of code 2022 day 6
const prob6Funcs = require('./index.js');
const myData = require("./puzzleinput06.js");

describe('Day 6 Search for loction of first 4 non repeating characters', () => {
  test('testing first test string should return 7', () => {
    expect(prob6Funcs.findStartOfPacketLoc(myData.testString1)).toBe(7);
  });
  
  test('testing second test string should return 5', () => {
    expect(prob6Funcs.findStartOfPacketLoc(myData.testString2)).toBe(5);
  });

  test('testing third test string should return 6', () => {
    expect(prob6Funcs.findStartOfPacketLoc(myData.testString3)).toBe(6);
  });
  test('testing fourth test string should return 10', () => {
    expect(prob6Funcs.findStartOfPacketLoc(myData.testString4)).toBe(10);
  });

  test('testing fifth test string should return 11', () => {
    expect(prob6Funcs.findStartOfPacketLoc(myData.testString5)).toBe(11);
  });

  test('testing first test string should return 19', () => {
    expect(prob6Funcs.findStartOfMessage(myData.testString1)).toBe(19);
  });
  
  test('testing second test string should return 23', () => {
    expect(prob6Funcs.findStartOfMessage(myData.testString2)).toBe(23);
  });

  test('testing third test string should return 23', () => {
    expect(prob6Funcs.findStartOfMessage(myData.testString3)).toBe(23);
  });
  test('testing fourth test string should return 29', () => {
    expect(prob6Funcs.findStartOfMessage(myData.testString4)).toBe(29);
  });

  test('testing fifth test string should return 26', () => {
    expect(prob6Funcs.findStartOfMessage(myData.testString5)).toBe(26);
  });
});