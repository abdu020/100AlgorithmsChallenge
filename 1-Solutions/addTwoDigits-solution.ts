function addTwoDigits(n: any): number {
  // map solution

  const result = n
    .toString()
    .split("")
    .map(number => {
      return parseInt(number);
    });

  return result[0] + result[1];

  // Reduce solution
  const result = n
    .toString()
    .split("")
    .reduce((h, g) => {
      return parseInt(h) + parseInt(g);
    });

  return result;
}

console.log(addTwoDigits(29));
console.log(addTwoDigits(59));
