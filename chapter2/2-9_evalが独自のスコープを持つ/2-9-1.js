function notstrict() {
  eval('var hoge = "hoge", ');
  console.log(hoge);

  eval('let fuga = "fuga", ');
  console.log(fuga); // エラー(letはブロックスコープ)
}

function strict() {
  'use strict';
  eval('var hoge = "hoge", ');
  console.log(hoge);
}