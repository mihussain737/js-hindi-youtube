const score=100;
// console.log(score)

const balance=new Number(100);
// console.log(balance)

//+++++++++++++++++++ methods of numbers

// console.log(score.toString().length);
// console.log(balance.toString());

// console.log(score.toFixed(2));//100.00
// console.log(score.toPrecision(4));

const hun=1000000;
// console.log(hun.toLocaleString());//international
// console.log(hun.toLocaleString('en-IN'));

//+++++++++++++++++++++Math library

// console.log(Math)
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.6));//5
// console.log(Math.ceil(4.6));//5
// console.log(Math.floor(4.6));//4
// console.log(Math.random());//0.4 to 1

// console.log(Math.min(4,3,5,6));
// console.log(Math.max(4,3,5,6));

// console.log(Math.floor((Math.random()*10)+1));//random value from 1 to 10

const max=20;
const min=10;

console.log(Math.floor(Math.random()*(max-min+1))+min); //random value from 10 to 20
