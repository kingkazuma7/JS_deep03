Object.is(true, true);
Object.is('hoge', 'fuga');
Object.is(100, 100);
Object.is(0/0, NaN);
Object.is(null, null);
Object.is(undefined, undefined);
Object.is(null, undefined);

let obj1 = {};
let obj2 = obj1;
Object.is(obj1, obj2);
Object.is({}, {});
