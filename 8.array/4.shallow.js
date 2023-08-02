const pizza = { name: '🍕', price: 71368 };
const ramen = { name: '🍜', price: 15647 };
const sushi = { name: '🍣', price: 6302 };

const store1 = [pizza, ramen];
const store2 = Array.from(store1);
console.log('store1: ');
console.table(store1);
console.log('store2: ');
console.table(store2);

store2.push(sushi);
console.group('/****************** after sushi push ******************/');
console.log('store1: ');
console.table(store1);
console.log('store2: ');
console.table(store2);
console.log(store1 == store2);
console.log(store1 === store2);
console.log(store1[0].name === store2[0].name);
console.groupEnd();

// Shallow Copy example (얕은 복사)
// 객체는 메모리 주소 전달
// JS에서 복사할 때는 항상 얕은 복사가 이뤄짐!
// Array.from, concat, slice, spread(...), Object.assign
pizza.price = 34105;
console.log('store1: ');
console.table(store1);
console.log('store2: ');
console.table(store2);