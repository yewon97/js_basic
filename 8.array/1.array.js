// 배열 생성 방법
let array = new Array(2);
console.log('array: ', array);

array = new Array(1, 2, 3);
console.log('array: ', array);

array = Array.of(1, 2, 3, 4);
console.log('array: ', array);

const anotherArray = [1, 2, 3, 4, 5];
console.log('anotherArray: ', anotherArray);

array = Array.from(anotherArray);
console.log('array: ', array);

array = Array.from('text');
console.log('array: ', array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 JS 에서의 배열은 연속적으로 이어져있지않고
// 오브젝트와 유사함!
// JS의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체이다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음 (Typed Colletions)

array = Array.from({
  0: '안',
  1: '녕',
  length: 3,
});
console.log('array: ', array);
