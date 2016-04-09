//items = [10, 5, 8, 1, 4, 2, 6, 9, 840, 483, 100];
//result should equal = [1, 2, 4, 5, 6, 8, 9, 10, 100, 483, 840]

//This file is seeminly overly complicated, due to me wanting to time
//the entire sorting time versus time each call to mergeSort

function sortViaMerging(items) {
  console.time('merge');

  items = mergeSort(items);

  console.timeEnd('merge');
  return items;
};

function mergeSort(values) {
  if(values.length === 1) return values;

  let middle = Math.ceil(values.length / 2);

  let left = mergeSort(values.splice(0, middle));
  let right = mergeSort(values);

  return merge(left, right);
};

// left = sorted array
// right = sorted array
// returns a sorted array
function merge(left, right) {
  let result = [];
  let resultPos = 0;
  let leftPos = 0;
  let rightPos = 0;

  while(leftPos < left.length && rightPos < right.length) {
    if(left[leftPos] < right[rightPos]) {
      result[resultPos] = left[leftPos];
      leftPos++;
    }else {
      result[resultPos] = right[rightPos];
      rightPos++;
    }

    resultPos++;
  }

  while(leftPos < left.length) {
    result[resultPos] = left[leftPos];
    leftPos++;
    resultPos++;
  }

  while(rightPos < right.length) {
    result[resultPos] = right[rightPos];
    rightPos++;
    resultPos++;
  }

  return result;
};
