/* const multiple = {
  [Symbol.iterator]() {
    const MAX = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > MAX };
      },
    };
  },
}; */

// function* => *붙인게 generator
// yield 는 사용자가 next()를 호출할 때까지 기다렸다가 for문을 loop함 
// -> 사용하는 사람에게 제어권을 양도 한다고 볼 수 있음
function* multipleGenerator() {
	// error가 던져질 것을 대비해서 try-catch문을 사용한다.
	try {
		for(let i = 0; i < 10; i++) {
			console.log('i : ', i );
			yield i * 2;
		}
	} catch (error) {
		console.log('error: ', error);
	}
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log('next: ', next);
console.log('multiple.next(): ', multiple.next());
console.log('multiple.next(): ', multiple.next());

console.log(next.value, next.done);

// error를 던지면 crash됨
// multiple.throw('Error!'); 

multiple.return(); // 그만 할꺼야 끝내
console.log('multiple.next(): ', multiple.next()); // { value: undefined, done: true }
