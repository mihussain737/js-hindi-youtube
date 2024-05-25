function calculateCartPrice(... number1){
    return number1
}
// console.log(calculateCartPrice(200,300,400))

function calculateCartPrice1(val1,val2, ...num1){
    return num1;
}
// console.log(calculateCartPrice1(200,300,400,500,600))

//objects and functions

const user={
    username:"hitesh",
    price:199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username:"golu",
//     price:3999
// })

const newArray=[200,300,400,500]

function returnSecondElementArray(array){
    return array[1]
}
// console.log(returnSecondElementArray(newArray))
console.log(returnSecondElementArray([500,600,700]))