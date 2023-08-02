const fruits = ['🍌', '🍓', '🍇', '🍓'];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// 배열을 빙글 빙글 돌면서 원하는 것을 할 때
fruits.forEach((fruit, index, array) => {
  console.log('--------------------------');
  console.log(fruit);
  console.log(index);
  console.log(array);
});

fruits.forEach((fruit) => console.log(fruit));

// 조건에 맞는 (콜백함수) 아이템을 찾을 때
// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: '🥛', price: 1 };
const item2 = { name: '🍪', price: 2 };
const item3 = { name: '🍙', price: 3 };
const products = [item1, item2, item3, item2];
let result = products.find((product) => product.name === '🍪');
console.log('result: ', result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((product) => product.name === '🍪');
console.log('result: ', result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((product) => product.name === '🍪');
console.log('result: ', result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((product) => product.name === '🍪');
console.log('result: ', result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((product) => product.name === '🍪');
console.log('result: ', result);

// 응용하기
// 조건에 맞는 모든 아이템들을 새로운 배열로 만든 다음 -> 값 변경
result = products
  .filter((product) => product.name === '🍪')
  .map((product, index) => {
    if (index === 1) {
      return { ...product, price: 4 };
    }
    return product;
  });
console.log('result: ', result);

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
result = nums.map((item) => (item % 2 === 0 ? item * 2 : item));
console.log('result: ', result);

// Flatmap: 중첩된 배열을 쫘악 펴줌
result = nums.map((item) => [1, 2]);
console.log('result: ', result);
result = nums.flatMap((item) => [1, 2]);
console.log('result: ', result);

result = ['dream', 'coding'].map((text) => text.split(''));
console.log('result: ', result);
result = ['dream', 'coding'].flatMap((text) => text.split(''));
console.log('result: ', result);

// sort 배열의 아이템들을 정렬
// 문자열 형태의 오름차순으로 요소를 정렬하고, 기존의 배열을 변경
const texts = ['hi', 'abc'];
texts.sort();
console.log('texts: ', texts);

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log('numbers: ', numbers);
numbers.sort((a, b) => a - b); // 오름차순
console.log('numbers: ', numbers);
numbers.sort((a, b) => b - a); // 내림차순
console.log('numbers: ', numbers);

// reduce 배열의 요소들을 접어서 접어서 값을 하나로!
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
console.log('result: ', result);
