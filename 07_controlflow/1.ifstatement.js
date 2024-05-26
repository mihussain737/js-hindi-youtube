//if else
// const temperature=41;
// if(temperature<50){
//     console.log("temperature is less than 50")
// }
// else{
//     console.log("temperature is greater than 50")
// }


// const score=200;
// if(score>100) {
//     let power="fly";
//     console.log(`power is :${power}`)
// }
// console.log(`user power is ${power}`)//power cant be access because of limited access of let

//
// const balance=1000;
// if (balance> 500) console.log("test1"),console.log("test2");

// const balance=1000;
// if (balance<500){
//     console.log("less than 500")
// }else if(balance<750){
//     console.log("less than 750")
// } else{
//     console.log("greater than 750")
// }

// swith case

// const month ="feb"
// switch (month) {
//     case "jan":
//         console.log("january")
//         break;
//     case "feb":
//         console.log("february")
//         break;
//     default:
//         console.log("invalid input")
//         break;
// }

//falsy values=> false "" 0 -0 null 0n undefined nan
//truthy values=> "0" 'false' " " [] {} function(){}

// const useremail=[]
// if(useremail.length===0){
//     console.log("user is empty")
// }else{
//     console.log(` got user email ${useremail}`)
// }

//nullish voalescing operator

let val1;
// val1=5?? 10
// console.log(val1)//5
val1=null?? 10
// val1=undefined?? 10
console.log(val1)//10

//ternary operator
 const iceTeaPrice=100;
 iceTeaPrice >=80?console.log("greater than 80"):console.log("less than 80");
