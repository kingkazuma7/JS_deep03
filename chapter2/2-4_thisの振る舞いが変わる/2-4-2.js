function notstrict() {
  console.log(null === this);
} // グローバルオブジェクトとして扱われる

function strict() {
  'use strict';
  console.log(null === this);
}

notstrict.call(null);
strict.call(null);