// singleton - constructor thi - one of its kind
// Object.create -> constructor

// object literals


const mySymbol = Symbol("key1")
const mySymbol1 = Symbol("key2")



const JsUser = {
    name: "sidhdhrajsinh",
    "full name": "Sidhdhrajsinh Dodiya",
    mySymbol: "this is key1 from symbol", //usable but as string
    [mySymbol1]: "this will be accisible as symbol",
    age: 19,
    location: "Akshardham",
    email: "sidh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.location);
// console.log(JsUser["location"]);
// console.log(JsUser.lastLoginDays);
// console.log(JsUser.mySymbol); //access but not as symbol data type
// console.log(JsUser[mySymbol1]);






// Object.freeze(JsUser) //can't change
// JsUser.email = "sidhdh@lol.com"

JsUser.greetings = function() {
    console.log("bapu here");
}
console.log(JsUser.greetings);
console.log(JsUser.greetings());

