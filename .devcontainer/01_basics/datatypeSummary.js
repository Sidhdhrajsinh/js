// const name =["sidhdhrajsinh", "dodiya", "bapu"];

// let obj = {
//     namee: "sidhdh",
//     age: 19
// }

// console.log(name);

// console.log(obj);


// const myFunction = function(){
//     console.log("hello word!");
// }
// console.log(typeof(myFunction));
// myFunction(); //prints 




// -------------------------memory---------------------

//----stack - primitive - copy
//----heap - non primitive - reference

let userOne = {
    email: "oldmail.com",
    name: "old"
}

let userTwo = userOne

userTwo.email = "newmail.com"   //will also change them rigional mail

console.log(userOne.email);
console.log(userTwo.email);  
