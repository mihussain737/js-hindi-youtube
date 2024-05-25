const user={
    username:"hitesh",
    price:99,
    
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`)
        console.log(this)// context not working here// only in object
    }
}
// user.welcomeMessage();
// user.username="sam"
// user.welcomeMessage();
// console.log(this)//application context not working here only prinnt {}//empty object

// function chai(){
//     console.log(this)
// }

// chai()

//arrow
// const chai=()=>{
//     let username="hitesh"
//     console.log(this)//{}
// }

// chai()
//this is arrow function
// const addTwo=( num1, num2)=>{
//    return num1+num2;
// }
// console.log(addTwo(10,20));

// const addTwo=(num1, num2)=>(num1+num2)

const addTwo=(num1,num2)=> ({username:"hitsh"})
console.log(addTwo(3,7));