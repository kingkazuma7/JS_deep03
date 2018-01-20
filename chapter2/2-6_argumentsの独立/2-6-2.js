function strict(obj) {
  'use strict';
  obj.hoge = 'hoge';
  console.log(obj.hoge);
  console.log(arguments[0].fuga);

  arguments[0].fuga = 'fuga';
  console.log(obj.fuga);
  console.log(arguments[0].fuga);
}
// 関数パラメータとarugumentsオブジェクトには同じオブジェクトへの参照が格納

strict({});