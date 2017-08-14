function insertionSort(array) {
  for (let i = 0, index = 1; i < array.length - 1; i++, index++) {

    for (let j = index - 1; j >= 0; j--) {
      if (array[index] < array[j]) {
        [array[j], array[index]] = [array[index], array[j]];
      }
    }
  }
  return array
}

export default insertionSort;
