const expression = require('./szakaszzáró.js');
const a = 3;
const b = 9;

// 8. feladat:

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');
const readline = require('readline-sync');
const first = readline.keyIn();
const second = readline.keyIn();

const generate = (n, m) => {
  const arr = new Array(n);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(m);
  }
  return arr;
};

const fill = (array) => {
  const value = 2;
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = Math.pow(value, sum);
      sum++;
    }
  }
  return array;
};
const array = generate(first, second);
console.log(fill(array));
