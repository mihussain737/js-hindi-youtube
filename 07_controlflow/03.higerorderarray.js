// const arr =[2,5,2,1,6];
// for(const num of arr){
//     console.log(num)
// }

// const greeting ="hello world";
// for(const greet of greeting){
//     console.log(`each char is ${greet}`)
// }

const map =new Map();
map.set('IN','India');
map.set('US','United states of america');
map.set('FR',"france");

// console.log(map)
for (const [key, value] of map) {
    // console.log(key,'-',value)
}
//for in
// for (const [key,value] in map) {
//     console.log(key,value)
// } map is not iterable so we cant print map by this

const game={
    "game1":"nfs",
    "game2": "igi"
}
//cant iterate like this
// for (const [key, value] of game) {
//     // console.log(key,'-',value)
// }
//for in
for(const key in game){
    // console.log(`${key} game is ${game[key]}`)
}

//for in for the array print only index

const arr=["js","cpp","java"]
for (const key in arr) {
    // console.log(key)//for in print index
    // console.log(arr[key])
}

//for each
arr.forEach(function(val){
    // console.log(`all programming is- ${val}`)
})

arr.forEach((item)=>{
// console.log(item)
})

function printMe(item){
    // console.log(item)
}
arr.forEach(printMe)
//+++++++++++++++++++++++++++
arr.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})

const myCoding =[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"sql",
        languageFileName:"sql"
    },
    {
        languageName:"python",
        languageFileName:"python"
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageName+"-"+item.languageFileName)
    // console.log(item.languageFileName)
})