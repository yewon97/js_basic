/*
 * Spread 연산자, 전개구문
 * 모든 Iterable은 Spread 될 수 있다.
 * 순회가 가능한 모든 것들은 촤르륽 펼쳐질 수 있다
 * func(...iterable)
 * [...iterable]
 * {...obj}
 * EcmaScript 2018
 */

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(...nums));

// * Rest Parameter
function sum(first, second, ...nums) {
  console.log(nums);
}

console.log(sum(1, 3, 4, 5, 6, 7, 7));

// * Array Concat
const fruits1 = ['🍎', '🍍'];
const fruits2 = ['🍓', '🥝'];
let arr = fruits1.concat(fruits2);
console.log('arr: ', arr);
arr = [...fruits1, '🍊', ...fruits2, '🍒'];
console.log('arr: ', arr);

// * Object
const yewon = { name: 'Yewon', age: 26, home: { address: 'home' } };
const updated = {
  ...yewon,
  job: 'frontend engineer',
};
console.log('yewon: ', yewon);
console.log('updated: ', updated);

// Swallow Copy
console.log('yewon', yewon.home);
console.log('updated', updated.home);

updated.home.address = 'updated home';

console.log('yewon', yewon.home);
console.log('updated', updated.home);
