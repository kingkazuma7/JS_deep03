function notstrict(val) {
  val = 1;
  console.log(val);
  console.log(arguments[0]);

  arguments[0] = 9;
  console.log(val);
  console.log(arguments[0]);
}

function strict(val) {
  'use strict';
  val = 1;
  console.log(val);
  console.log(arguments[0]);

  arguments[0] = 9;
  console.log(val);
  console.log(arguments[0]);
}

notstrict(0);
strict(0);