function checkThis() {
  console.log(this);
  this.val = 'test';
}

checkThis();
console.log(val);
// 関数内でのthis参照 = グローバルオブジェクトへの参照