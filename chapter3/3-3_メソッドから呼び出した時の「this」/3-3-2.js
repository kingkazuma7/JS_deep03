// chechThisメソッドの中で呼び出したthisは、メソッドが所属するobjオブジェクトを指している
let obj2 = {
  val: 'hoge',
  checkThis: function() {
    console.log(this.val); // hoge
    this.val = 'fuga';

    function innerCheckThis() {
      console.log(this.val); // undefined
    }

    innerCheckThis();
  }
};

obj2.checkThis();
console.log(obj2.val);