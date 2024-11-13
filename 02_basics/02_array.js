const mcu_heros = ["ironman", "thor", "hulk","DoctorStrange","Flacon"];
const dcheros = ["superman","Batman","WonderWomen"];

mcu_heros.push(dcheros);
console.log(mcu_heros);
/*
output = [
  'ironman',
  'thor',
  'hulk',
  'DoctorStrange',
  'Flacon',
  [ 'superman', 'Batman', 'WonderWomen' ]
]
  */

//and tihs will be the synytax to get nay element form the array
console.log(mcu_heros[5][1]);// so this will be output Batman

//use of concat
const names1 = ["Raj", "Loveleen"];
const names2 = ["Rajwinder","Harbal"];

const allnames= console.log(names1.concat(names2));

//spread operator

const all_of_the_names = [...names1 ,...names2];

console.log(all_of_the_names);


//use of the flad method is the that it create an simlpe array 
const newArray = ["Raj", ["Dilpreet","Himmat","Manjot","Veerjatinder"],"tejwinder",["Harjit","Lakhvir"]]

const  correctarray = newArray.flat(Infinity);
console.log(correctarray);


//check if an array is an array
console.log(Array.isArray("Rajwinder"));
console.log(Array.isArray(["Rajwinder","Raj"]));

//converting thid into array 

console.log(Array.from("Rajwinder"));
console.log(Array.from({name:"Raj"}));


let score = 100;
let score2 = 200;
let score3 = 300;
//this will make a new array using the above score
console.log(Array.of(score,score2,score3));
