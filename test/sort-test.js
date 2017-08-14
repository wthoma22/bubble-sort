const assert = require('chai').assert;
const bubbleSort = require('../scripts/sort');
const array = [1, 4, 3, 2, 6, 5];
const sortedArray = [1, 2, 3, 4, 5, 6];
const arrayLetters = ["d", "b", "a", "c"];
const sortedLetters = ["a", "b", "c", "d"];

describe('bubbleSort', () => {
  it('should be a function', () => {
    assert.isFunction(bubbleSort);
  });

  it ('should sort array of numbers', () => {
    let numbers = array;
    let sorted = sortedArray;

    assert.deepEqual(bubbleSort(numbers), sorted);
  });

  xit ('should move min number to first position in array', () => {
    let numbers = sortedArray;
    let min = Math.min(numbers);

    assert.equal(numbers[0], min);
  });

  xit ('should move max number to last position in array', () => {
    let numbers = sortedArray;
    let max = Math.max.apply(null, numbers);

    assert.equal(numbers[-1], max);
  });

  it ('should sort array of letters', () => {
    let letters = arrayLetters;
    let sorted = sortedLetters;

    assert.deepEqual(bubbleSort(letters), sorted)
  });
})
