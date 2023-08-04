// Quiz
const prop = {
  name: 'Button',
  styles: {
    size: 20,
    color: 'black',
  },
};

function changeColor({name, styles : {size, color}}) {
	console.log(color);
}
changeColor(prop);
