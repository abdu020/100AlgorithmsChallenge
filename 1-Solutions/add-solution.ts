function add(param1: number, param2: number): number {
  const sum = param1 + param2;

  return sum;
}

function add2(param1: number[]): number {
  var total = 0;

  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }

  return total;
}

console.log(add(1, 2));
console.log(add(3, 2));

console.log(add2(1, 2, 3, 4, 5));
console.log(add2(2, 3));
