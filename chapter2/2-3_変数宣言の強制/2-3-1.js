function hoge() {
  'use strict';
  // fooはグローバルスコープに存在しないものとする
  foo = 'foo';
  console.log(foo);
}