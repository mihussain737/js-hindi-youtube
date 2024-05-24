let myDate=new Date();
// console.log(myDate)
// console.log(myDate.toLocaleString());
// console.log(myDate.toISOString());
// console.log(myDate.toString())

// let myCreatedDate=new Date(2024,0,23);
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

let myCreatedDate =new Date(2024,2,48,5,10);
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate1=new Date("01-14-2024");
// console.log(myCreatedDate1.toLocaleString());

let myTimeStamp=Date.now();
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(myCreatedDate.getDate())
console.log(myCreatedDate.getFullYear())

//converting in second

console.log(Math.floor(Date.now()/1000));

// myCreatedDate.toLocaleString('default',{
//     weekday:"long"
// })