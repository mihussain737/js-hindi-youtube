const str="Hello";
// console.log(str);

const str2="world";
// console.log(str+" "+str2);  //concatenate type one not recomended

// console.log(`${str} ${str2.length} how are you today`);//recomended because we can use strings various method in back tick

//+++++++++++++++++++++++++++++++
const gameName=new String( "hitesh-hc-com");

// console.log(gameName.length)//13
// console.log(gameName.toLowerCase)
// console.log(gameName.toUpperCase)

// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('t'));

const newStr=gameName.substring(0,4);
// console.log(newStr)

const anotherString=gameName.slice(2,4)
// console.log(anotherString)

const url="https://hitesh.com/hitesh%20chaudhry"
// console.log(url.replace('%20','-'))
// console.log(url.includes('sunder'))//false

console.log(gameName.split('-'))



