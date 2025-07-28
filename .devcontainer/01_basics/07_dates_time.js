// let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toUTCString());
// console.log(typeof myDate);


let myCreatedDate = new Date(2025, 1, 23) //month starts from 0 like ary
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now()); //in mili sec which is hard to compare
// console.log(Date.now()/1000); // in sec but still having floats
// console.log(Math.floor(Date.now()/1000)); 

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getMonth()); // note indexing starts from 0
// console.log(newDate.getDay()); // 1 for monday
// console.log(newDate.getTime()); //still in ms



//====================do some research about this==========================
// console.log((newDate.toLocaleString()));

// newDate.toLocaleString('default', {
//     weekday: "long"
//     // timezone ''
// })

// console.log((newDate.toLocaleString()));


