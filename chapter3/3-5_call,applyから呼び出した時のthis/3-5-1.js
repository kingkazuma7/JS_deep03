// call applyメソッドは、thisを束縛するメソッド
function sum(val1, val2) {
  console.log(this.val + val1 + val2);
}

let obj1 = {val: 1};
let obj2 = {val: 2};

sum.call(obj1, 1, 1);
sum.call(obj2, 1, 1);

sum.apply(obj1, [1, 1]);
sum.apply(obj2, [1, 1]);