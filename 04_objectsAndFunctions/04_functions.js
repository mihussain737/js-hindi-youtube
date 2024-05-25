function sayMyName(){
  console.log("H")
  console.log("I");
  console.log("T")
}

// sayMyName()//call function 
// sayMyName//refrence function

function addTwoNumber(number1 , number2){
    console.log(number1+number2)
}
// addTwoNumber(10,20)

function addTwoNumbers(number1, number2){
    let result=number1+number2
    return result
}
const result=addTwoNumbers(10,20)
// console.log("result:" +result);

function userLoggedIn(username){
    if(username===undefined){
        console.log("Please enter valid username")
        return 
    }
    return `${username} just logged In`
}
console.log(userLoggedIn("hitesh"))