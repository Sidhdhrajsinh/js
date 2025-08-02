const tinderUser = new Object();
// const tinderUser = {}
// console.log(tinderUser);

tinderUser.id = "123abc"
tinderUser.name = "sidhdhrajsinh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);


const regularUser = {
    email: "sidhdmail.com",
    fullname: {
        firstname: "sidh",
        lastname: "dodiya"
    },
    dob: "123"
}


// console.log(regularUser.fullname);
// console.log(regularUser.fullname.lastname);
// console.log(regularUser.firstname);



const obj1 = {
    1: 'a',
    2: 'b'
}
const obj2 = {
    3: 'a',
    4: 'b'
}

// const obj3 = {obj1, obj2} // //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign(obj1, obj2) //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
//const obj3 = Object.assign({},obj1, obj2, obj4, obj5) //for >2
// console.log(obj3); 

const obj3 = {...obj1, ...obj2} //spread- easy
// console.log(obj3); 


// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//================vid 18=========

const course = {
    name: "JS in hindi",
    price: 999,
    courseInstructor: "Hitesh sir"
}

//course.courseInstructor

//++++Destructuring+++++

// const {courseInstructor} = course;

// console.log(courseInstructor);



// const {courseInstructor: prof} = course;

// console.log(prof);


//_______________API_______________

//json ex
// {
//     "name": "hitesh",
//     "coursename": "JS in hindi",
//     "price": "free"
// }


// some api may come in array with objects in it
// [
//     {},
//     {},
//     {}
// ]