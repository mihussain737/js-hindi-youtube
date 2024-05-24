// Object.create();

const mySym=Symbol("key1");

const jsUser={
    name:"hitesh",
    "full name":"hitesh chaudhry",
    email:"hitesh@google.com",
    age:18,
    [mySym]:"mykeys1"
}

// console.log(jsUser);

// console.log(jsUser.name);//two types to access objects keys, first
// console.log(jsUser["full name"]);// second
// console.log(jsUser.age)
// console.log(jsUser["mySym"])

// jsUser.email="hitesh@ChatGpt.com";//email can change here
// Object.freeze(jsUser);//to freeze and value cant change
// jsUser.email="hitesh@microsoft.com"//value cant change here
// console.log(jsUser);

jsUser.greeting=function () {
    console.log("hello js user")
}

jsUser.greetingTwo=function(){
    console.log(`Hello js user ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greetingTwo())
