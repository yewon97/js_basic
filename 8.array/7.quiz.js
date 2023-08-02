// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

const quiz1 = ['🍌', '🍓', '🍇', '🍓'].map((fruit) => {
  if (fruit === '🍓') return '🥝';
  return fruit;
});
console.log('quiz1: ', quiz1);

function replaced(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2
const quiz2 = ['🍌', '🥝', '🍇', '🥝']
  .map((fruit) => {
    if (fruit === '🥝') return 1;
    return 0;
  })
  .reduce((curr, prev) => curr + prev);
console.log('quiz2: ', quiz2);

function count(array, item) {
  return array.filter((value) => value === item).length;
}
console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'],  ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]
const quiz3 = ['🍌', '🥝', '🍇'].filter((item) => {
  return ['🍌', '🍓', '🍇', '🍓'].includes(item);
});
console.log('quiz3: ', quiz3);

function match(input, search) {
  return input.filter((item) => search.includes(item));
}

// 퀴즈 4
// 5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];
const result = nums //
  .filter((num) => num > 5) //
  .reduce((avg, val, _, array) => avg + val / array.length, 0);
console.log('result: ', result);
