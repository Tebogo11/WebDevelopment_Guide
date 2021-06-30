const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((acc, item) => {
  debugger;
  return acc.concat(item);
}, []);
