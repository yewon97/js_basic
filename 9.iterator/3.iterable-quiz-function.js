// 0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!
function makeIterable(initialValue, maxValue, callback) {
  return {
    [Symbol.iterator]() {
      let num = initialValue;
      return {
        next() {
          return { value: callback(num++), done: num > maxValue };
        },
      };
    },
  };
}

const multiple = makeIterable(0, 20, (n) => n * 2);

for (const n of multiple) {
  console.log('n: ', n);
}
