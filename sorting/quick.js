//items = [10, 5, 8, 1, 4, 2, 6, 9, 840, 483, 100];
//result should equal = [1, 2, 4, 5, 6, 8, 9, 10, 100, 483, 840]

//This file is seeminly overly complicated, due to me wanting to time
//the entire sorting time versus time each call to quickSort

function sortViaQuickSort(items) {
  console.time('quickSort');

  quickSort(items, 0, items.length - 1);

  console.timeEnd('quickSort');
  return items;
};

function quickSort(items, start, end) {
  if(start >= end) return;

  let partitionIndex = partition(items, start, end);
  quickSort(items, 0, partitionIndex - 1);
  quickSort(items, partitionIndex + 1, end);
};

function partition(items, start, end) {
  let pivotValue = items[end];
  let partitionIndex = start;

  for(let i = start; i < end; i++) {
    if(items[i] <= pivotValue) {
      swap(items, i, partitionIndex);
      partitionIndex++;
    }
  }

  swap(items, partitionIndex, end);

  return partitionIndex;
};

function swap(items, start, end) {
  let firstSwap = items[start];
  items[start] = items[end];
  items[end] = firstSwap;
};
