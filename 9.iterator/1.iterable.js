// Iterable 하다는 건! 순회가 가능하다는 것
// [Symbol.iterator](): Iterator;
// 심볼정의를 가진 객체나, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회 가능한 객체이다 라는 걸 알 수 있음
// 순회가 가능하면 무엇을 할 수 있나? for...of, spread

const array = [1, 2, 3];

for (const item of array) {
  console.log('item: ', item);
}

for (const item of array.values()) {
  console.log('item: values', item);
}

for (const item of array.keys()) {
  console.log('item: keys', item);
}

for (const item of array.entries()) {
  console.log('item: entries', item);
}

/* const obj = { 0: 1, 1: 2 };
for (const item of obj) {
	console.log('item: ', item);
} */

const obj = { 0: 1, 1: 2 };
for (const item in obj) { // key를 출력
	console.log('item: ', item);
}

const iterator = array.values();
/* console.log(iterator.next().value); // { value: 1, done: false }
console.log(iterator.next()); // { value: 2, done: false }
console.log(iterator.next()); // { value: 3, done: false }
console.log(iterator.next()); // { value: undefined, done: true }  */

while(true) {
	const item = iterator.next();
	if(item.done) break;
	console.log(item.value);
}