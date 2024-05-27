//filter cant return anyything so remove return and const values
const coding=['javascript',"java","cpp","c","python"];
const values=coding.forEach((item)=>{
    // console.log(item);
    // return item
})
// console.log(values)
const num=[1,2,3,4,5,6,7,8,9,10]
const newCoding=num.filter((num)=> {
    return num>5
})
// console.log(newCoding)

//print the greater with 5 in new array
const newNums=[]
num.forEach((num1)=>{
    if (num1>5){
        newNums.push(num1)
    }
})
// console.log(newNums)

// filter use in array of objects

const books=[
    {title:'book one', genre:'science',publish:'1986'},
    {title:'book two', genre:'history',publish:'1932'},
    {title:'book seven', genre:'history',publish:'1960'},
    {title:'book six', genre:'history',publish:'1988'},
    {title:'book three', genre:'fiction',publish:'1999'},
    {title:'book four', genre:'politics',publish:'2007'}
]

let userBooks=books.filter((book)=> book.genre==='history')
// console.log(userBooks)
userBooks=books.filter((bk)=>{
    return(bk.publish>=1970 && bk.genre==='history')
})
// console.log(userBooks)

//map
const nums=[1,2,3,4,5,6]
const newNum= nums.map((num)=>num+10);
// console.log(newNum)

//map map and filter

const newNum1=nums.map((num)=> num*10)
.map((num)=> num+1)
.filter((num)=>{ return num>=40})
// console.log(newNum1)

//reduce method

const myNumss=[1,2,3]
let acc=myNumss.reduce(function(acc, currentVal){
 return acc+currentVal
},0)
// console.log(acc)
acc=myNumss.reduce((acc,currentVal)=>{
    return acc+currentVal
},0)
// console.log(acc)

//reduce method in array of objects
const cart=[
    {
        course:"js",
        price:300
    },
    {
        course:"java",
        price:400
    },
    
    {
        course:"C++",
        price:500
    }
]
const newCart=cart.reduce((acc,course)=>acc+course.price
    ,0);
    console.log(newCart)