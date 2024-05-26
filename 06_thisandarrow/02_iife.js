// function chai(){
//     console.log(`DB Connected`);
// }
// chai()

//iife // to immediately invoked and prevent from the global pollution
(function chai(){
    console.log(`DB connected`)
})();

//iife with arrow function
( ()=>{
    console.log(`DB connected 2`);
})();
//with parameter
( (name)=>{
    console.log(`DB connected 2 and the username=${name}`);
})("hitesh");