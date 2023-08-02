// 배열의 함수들
// 1. 배열 자체를 변경하는지, 
// 2. 새로운 배열을 반환하는지

const fruits = ['🍌', '🍎', '🍋'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

// 특정한 아이템의 위치를 찾을 때
console.log(fruits.indexOf('🍎'));
console.log(fruits.indexOf('🍓'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('🍓'));
console.log(fruits.includes('🍎'));

/*
 * 기존의 배열 자체를 수정(업데이트)
 */
// 추가 - 제일 뒤
let length = fruits.push('🍑'); // 배열자체를 수정(업데이트)
console.log('length: ', length);
console.log('fruits: ', fruits);

// 추가 - 제일 앞
length = fruits.unshift('🍓');
console.log('length: ', length); // 배열자체를 수정(업데이트)
console.log('fruits: ', fruits);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열자체를 수정(업데이트)
console.log('fruits: ', fruits);
console.log('lastItem: ', lastItem);

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열자체를 수정(업데이트)
console.log('fruits: ', fruits);
console.log('lastItem: ', lastItem);

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1); // 배열자체를 수정(업데이트)
console.log('fruits: ', fruits);
console.log('deleted: ', deleted);
fruits.splice(1, 0, '🍍', '🍉'); // 지우고, 추가함
console.log('fruits: ', fruits);

/*
 * 달라진 새로운 배열을 만듬
 */
let newArr = fruits.slice(2, -1);
newArr = fruits.slice(-1); // 마지막 아이템
newArr = fruits.slice(0); // 전체 배열
console.log('fruits: ', fruits);
console.log('newArr: ', newArr);

// 여러개의 배열을 붙여줌
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = arr1.concat(arr2);
console.log('arr1: ', arr1);
console.log('arr2: ', arr2);
console.log('arr3: ', arr3);

// 순서를 거꾸로
const arr4 = arr3.reverse();
console.log('arr4: ', arr4);

// 중첩 배열을 하나의 배열로 쫙 펴기
let arr = [
	[1, 2, 3],
  [4, [5, 6]],
];
console.log('arr: ', arr);
console.log('arr.flat(): ', arr.flat()); // 1단계까지만 flat 해줌
console.log('arr.flat(): ', arr.flat(2)); // 매개변수 int로 전달
arr = arr.flat(2);
console.log('arr: ', arr);

// 특정한 값으로 배열을 채우기
arr.fill(0); // 배열자체를 수정(업데이트)
console.log('arr: ', arr);

arr.fill('s', 1, 3);
console.log('arr: ', arr);

arr.fill('s', 1);
console.log('arr: ', arr);

// 배열을 문자열로 합치기
let text = arr.join();
console.log('text: ', text);
text = arr.join('');
console.log('text: ', text);
text = arr.join(' | ');
console.log('text: ', text);