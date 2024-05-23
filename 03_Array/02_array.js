const marvel_heros=["spiderman","thor","ironman"]
const dc_heros=["superman","batman","flash"]

// marvel_heros.push(dc_heros);// add dc into marvel and return array into array
// console.log(marvel_heros)

// let allHeros=marvel_heros.concat(dc_heros)// return new array and add the both array
// console.log(allHeros)

// const allNew=[...marvel_heros, ...dc_heros];
// console.log(allNew)

const arr=[1,2,3,[4,5,6],[2]]
const realArr=arr.flat(Infinity)
// console.log(realArr)
console.log(Array.isArray("Hitesh"));
console.log(Array.from("hitesh"));

console.log(Array.from ({ name:"hitesh"}));
let score1=199;
let score2=122;
let score3=188;
console.log(Array.of(score1,score2,score3))