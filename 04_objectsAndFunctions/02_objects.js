//singleton object
// const tinderUser=new Object();

//non singleton
const tinderUser={

}

tinderUser.id=1;
tinderUser.name="hitesh";
tinderUser.isLoggedIn=false;
// console.log(tinderUser);

const regularUser={
    email:"h@gmail.com",
    fullname:{
        userfullname:{
            firstName:"hitesh",
            lastName:"chaudhry"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstName);
// console.log(regularUser.fullname.userfullname);

//merge objects
const obj1={ 1:"a", 2:"b"};
const obj2={1:"c", 2:"d"};

// const obj3={obj1,obj2};//objects inside object

// const obj3 =Object.assign({},obj1,obj2)// 1 objects and merge

// const obj3={...obj1,...obj2}//1 objects and merge mostly used
// console.log(obj3);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"h2@gmail.com"
    },
    {
        id:3,
        email:"h3@gmail.com"
    }
]

console.log(tinderUser);
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));