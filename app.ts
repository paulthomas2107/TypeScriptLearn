console.log("My Stuff and more");

function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  console.log(typeof n1);
  return n1 + n2;
}

const number1 = 4;
const number2 = 2.8;

const res = add(number1, number2, true, 'PRINT');
console.log(res);
