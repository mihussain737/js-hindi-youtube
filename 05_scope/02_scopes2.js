function one(){
    const username="hitesh"

    function two(){
        const website="youtube"
        // console.log(username)
    }
    // console.log(website)
    two()
}
one()

if(true){
    const username="hitesh"
    if(username=="hitesh"){
        const website="youtube"
        console.log(username+website);
    }
    // console.log(website);
}
// console.log(username)

//++++++++ interesting +++++++++
console.log(addOne(5));//can run
function addOne(value){
    return num+1;
}
// addOne(5)//can run

console.log(addTwo(5))//can't run,error
function addTwo(value){
    return num+2;
}

addTwo(5)//can run
