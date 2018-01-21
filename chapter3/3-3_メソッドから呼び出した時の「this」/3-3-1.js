// メソッドから呼び出したthisは、そのメソッドが属するオブジェクトを指す
let obj = {
  val: 'hoge',
  checkThis: function() {
    console.log(this); // Object
    this.val = 'fuga';
  }
};

obj.checkThis();
console.log(obj.val);