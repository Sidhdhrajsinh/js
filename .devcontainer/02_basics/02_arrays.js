const marvel_heros = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel_heros.push(dc)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc) //returns new ary
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc]
// console.log(all_new_heros);


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


let score1 = 100
let score2 = 100
let score3 = 100

console.log(Array.of(score1,score2,score3));

