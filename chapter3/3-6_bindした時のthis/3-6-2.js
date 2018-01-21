function sum(val1, val2, val3) {
  console.log(val1 + val2 + val3);
}

let sumA = sum.bind(null, 1, 2, 3);
let sumB = sum.bind(null, 1);

sumA();
sumB(2, 3);
sumB(4, 5);