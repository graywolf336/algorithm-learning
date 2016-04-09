function generateItems(times) {
  let items = [];
  for (let i = 0; i < times; i++) {
      items.push(Math.round(Math.random() * times));
  }
  return items;
};
