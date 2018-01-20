function notstrict() {
  console.log(typeof this);
}

function strict() {
  'use strict';
  console.log(typeof this);
}

notstrict.call('foo');
strict.call('foo');