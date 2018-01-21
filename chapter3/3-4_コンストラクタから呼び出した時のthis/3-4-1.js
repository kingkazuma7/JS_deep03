// コンストラクタから呼び出したthisは、そのコンストラクタが生成したインスタンスを指します
let MyObj = function(val) {
  this.val = val;
}

MyObj.prototype.checkThis = function() {
  console.log(this.val);
}

let myObj = new MyObj('hoge');
myObj.checkThis(); // hoge

let myObj2 = new MyObj('fuga');
myObj2.checkThis(); // fuga

// クラスライク
// new演算子で呼び出されたコンストラクタは、自身が生成したインスタンスを
// 呼び出し元に返却する