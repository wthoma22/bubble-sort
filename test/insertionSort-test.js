const assert = require('chai').assert;
const insertionSort = require('../scripts/sort');

describe('Insertion Sort', () => {
  it('Should be a function', () => {
    assert.isFunction(insertionSort);
  });

  it('Should sort array of numbers', () => {
    let numbers = [1, 0, 4, 3, 2 ];
    let sorted = [0, 1, 2, 3, 4];

    assert.deepEqual(insertionSort(numbers), sorted)
  });

  it('Should sort array of letters', () => {
    let letters = ["d", "b", "a", "c"];
    let sorted = ["a", "b", "c", "d"];

    assert.deepEqual(insertionSort(letters), sorted)
  });
});
