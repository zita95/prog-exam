/* 1. feladat:
string:
let a = 'cica';
szám:
let a = 2;
tömb:
let a = [0, 1, 2];
objekt:
let a = {
  szemszín: kék,
  hajszín: fekete,
};
mátrix:
let a = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

 */
// 3. feladat:

const sum = (a, b) => {
  const sum = a + b;
  return sum;
};

// 4. feladat:
const arr = [1, 2, 3, 4, 5];
const count = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum++;
  }
  return sum;
};

// 5. feladat:

const c = 1;
switch (c) {
  case 0:
    console.log('nulla');
    break;
  case 1:
    console.log('c = 1');
    break;
};

// 6. feladat:

const arr2 = [2, 4, 6];
const section = (array, array2) => {
  const target = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array[i] === array2[j] && !target.includes(array[i])) {
        target.push(array[i]);
      }
    }
  }
  return target;
};

// 7.feladat:

const subtract = (a, b) => {
  const c = a - b;
  return c;
};

const multiply = (a, b) => {
  const c = a * b;
  return c;
};

const divide = (a, b) => {
  const c = b / a;
  return c;
};

module.exports = {
  sum: sum,
  multiply: multiply,
  divide: divide,
  subtract: subtract
};
