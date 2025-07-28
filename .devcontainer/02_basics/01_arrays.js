const myArr = [0,1,2,3,4,5]
// console.log(myArr[0]);

const myHeros = ["shaktiman", "steve", "jim hopper"]

const myArr2 = new Array(4,5,6,7,8);

// console.log(myHeros);


// myArr.push(77);
// myArr.push(78);
// console.log(myArr);
// myArr.pop();
// console.log(myArr);


// myArr.unshift(9); // push at 0th inx
// console.log(myArr);
// myArr.shift(); // pop at 0th inx
// console.log(myArr);



// const newArr =myArr.join()  //into string
// console.log(myArr);
// console.log(newArr);


//----slice

console.log("A ", myArr);

const myn1 = myArr.slice(1 ,3) //copy

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1 ,3) //cut

console.log(myn2);
console.log("C ", myArr);