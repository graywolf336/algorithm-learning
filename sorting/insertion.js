//items = [10, 5, 8, 1, 4, 2, 6, 9, 840, 483, 100];
//result should equal = [1, 2, 4, 5, 6, 8, 9, 10, 100, 483, 840]

function sortViaInsertion(items) {
  console.time('insertion');
  for(let i = 1; i < items.length; i++) {
    let value = items[i];
    let insertionPoint = i;

    while(insertionPoint > 0 && items[insertionPoint - 1] > value) {
      items[insertionPoint] = items[insertionPoint - 1];
      insertionPoint--;
    }
    items[insertionPoint] = value;
  }

  console.timeEnd('insertion');
  return items;
}
