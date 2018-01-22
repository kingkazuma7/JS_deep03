let obj = {val: 'hoge'};
let copyObj = Object.assign({}, obj);
copyObj.val;

// オブジェクトのマージ
let objA = {a: 'a'};
let objB = {b: 'b'};
let objC = {c: 'c'};
let mergObj = Object.assign(objA, objB, objC);
objA;
objA === mergeObj;

// シンボル型プロパティのコピー
let objD = {d: 'd'};
let objSym = {[Symbol('sym')]: 2};
let copyObj = Object.assign(objD, objSym);
objD;

// 番外編
let human = {name: 'iga'};
let igarashi = Object.assign({}, human);
human.name = 'tara';
igarashi;