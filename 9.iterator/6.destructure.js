// * 구조 분해 할당 Desturcturing Assignment
// * 데이터 뭉치(그룹화)를 쉽게 만들 수 있다.

const fruits1 = ['🍎', '🍍', '🍓', '🥝'];
const [frist, second, ...others] = fruits1;
console.log('frist: ', frist);
console.log('second: ', second);
console.log('others: ', others);

const point = [1, 2];
const [x, y, z = 9] = point;
console.log('x: ', x);
console.log('y: ', y);
console.log('z: ', z);

function createEmoji() {
  return ['apple', '🍎'];
}

const array = createEmoji();
const [title, emoji] = createEmoji();
console.log('array: ', array);
console.log('emoji: ', emoji);
console.log('title: ', title);

const yewon = {
  name: 'yewon',
  age: 26,
  job: 'frontend developer',
  home: { address: 'home' },
};
function display(person) {
  console.log('이름:', person.name);
  console.log('나이:', person.age);
  console.log('직업:', person.job);
}
function display2({ name, age, job }) {
  console.log('이름:', name);
  console.log('나이:', age);
  console.log('직업:', job);
}
display2(yewon);

const {
  name,
  age,
  job: occupation,
  pet = '강아지',
  home,
  home: { address: mask },
} = yewon;
console.log('이름:', name);
console.log('나이:', age);
console.log('직업:', occupation);
console.log('펫:', pet);
console.log('mask: ', mask);
