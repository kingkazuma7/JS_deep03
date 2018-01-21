function sum(val1, val2) {
  console.log(this.val + val1 + val2);
}

let obj1 = {val: 1};
let obj2 = {val: 2};

let obj1Sum = sum.bind(obj1);
let obj2Sum = sum.bind(obj2, 2, 2);

obj1Sum(1, 1);
obj2Sum();