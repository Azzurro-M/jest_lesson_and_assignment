const generateText = (dogName, breed) => {
  return `${dogName} is a ${breed}`;
};

//unit test for the aove function
//import function in a new test file module.exports = {} const = require + file path
//it or test method - it('should output dogName and breed string'....)
//test('outputs dogName and breed string', () => {
it("should output dogName and breed string", () => {
  expect(generateText("Ted", "spaniel-Beagle")).toBe("Ted is a spanial-Beagle");
});

const validateText = (text) => {
  if (!text && !!text.trim().length) {
    //removes whitespace from both sides of a string.
    return false;
  }
  if (typeof text === "number") {
    return false;
  }

  return true;
};

//test
it("should output true when given a string input", () => {
  const dogName = "Fido";
  expect(validateText(dogName)).toBe(true);
});

it("should output false when number provided", () => {
  expect(validateText(5)).toBe(false);
});

const validateAndReturn = (dogText, breed) => {
  if (!validateText(dogText) || !validateText(breed)) {
    return "Text not valid";
  }
  return generateText(dogText, breed);
};

module.exports = { generateText, validateText, validateAndReturn };

//integration test (it depends on other functions to run)

describe("validateAndReturn works", () => {
  it("outputs dog name and breed", () => {
    //assertion
    expect(validateAndReturn("Ted", "spaniel-Beagle")).toBe(
      "Ted is a spanial-Beagle"
    );

    expect(validateAndReturn(dogName)).toBe(true);

    expect(validateAndReturn(5, 6)).toBe(false);
  });
});
