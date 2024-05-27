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
console.log(newNums)