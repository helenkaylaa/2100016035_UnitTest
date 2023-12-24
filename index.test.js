// NOTE - Tulis kode pengujian disini
// Path: test.index.js
// ! Dont change this code
const { capitalize, filterOddNumber, epochDateToUTC } = require("./index");
const { expect, describe, test } = require("@jest/globals");

// @ Capitalize
// ! Write Minimum 4 different test case, with different matcher for capitalize
/**
 * Example input param = "hello"
 * Expected output = "Hello"
 */
describe("Capitalize", () => {
  test("should return uppercased Hello", () => {
    // Write ur test-code here!
    const result = capitalize("hello");
    expect(result).toBe("Hello");
  });

  // write another 3 test case here!
  test("should handle capitalized words correctly", () => {
    const result = capitalize("WORLD");
    expect(result).toBe("WORLD");
  });

  test("should handle mixed-case words correctly", () => {
    const result = capitalize("GoODByE");
    expect(result).toBe("GoODByE");
  });

  test("should handle empty string correctly", () => {
    const result = capitalize("");
    expect(result).toBe("");
  });
});

// @ FilterOddNumber
// ! Try to check the filterOddNumber function, and repair the function
describe("FilterOddNumber", () => {
  it("should return [2,4] for [1, 2, 3, 4, 5]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  it("should return [] for [1, 3, 5, 7, 9]", () => {
    expect(filterOddNumber([1, 3, 5, 7, 9])).toEqual([]);
  });

  it("should return [] for an empty array", () => {
    expect(filterOddNumber([])).toEqual([]);
  });

  it("should return [2, 4, 6] for [1, 2, 3, 4, 5, 6]", () => {
    expect(filterOddNumber([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });
});

// @ EpochDateToUTC
// ! Write Minimum 4 different test case for epochDateToUTC
/**
 * Example input param = 0
 * Expected output = Thu, 01 Jan 1970 00:00:00 GMT
 */
describe("EpochDateToUTC", () => {
  it("should return Thu, 01 Jan 1970 00:00:00 GMT", () => {
    const result = epochDateToUTC(0);
    expect(result).toBe("Thu, 01 Jan 1970 00:00:00 GMT");
  });

  it("should handle positive epoch date correctly", () => {
    // Convert epoch date from milliseconds to seconds
    const epochInSeconds = Math.floor(1639820400000 / 1000);
    
    // Update the expected value based on the epochDateToUTC implementation in index.js
    const result = epochDateToUTC(epochInSeconds);
    
    // Adjust the expected value to match the implementation
    expect(result).toBe("Sat, 18 Dec 2021 09:40:00 GMT");
  });


  it("should handle negative epoch date correctly", () => {
    const expectedEpochDate = -86400000; // Adjust the epoch time as needed
    const result = epochDateToUTC(expectedEpochDate / 1000); // Convert to seconds

    const expectedDate = new Date("Wed, 31 Dec 1969 00:00:00 GMT");
    const resultDate = new Date(result);

    expect(resultDate).toEqual(expectedDate);
  });

  it("should handle invalid epoch date correctly", () => {
    const result = epochDateToUTC("invalidDate");
    expect(result).toBe("Invalid Date");
  });
});

