//  Primitive
// difference is based on uhow the data is stored in the memory and hoe it is accessed 
// 7 types 
// which : String , Nunber, Boolean , Null , Undefined , Symbol
//Bigint
// js is loosely typed language coaz here we have not defined the rtype of the score const
const score = 100;
const scoreValue = 100.2;

const isloggedIn = false;
const temp = null;
let useremail;
// here we have assigned same value to id and anotherID we when we checked using eqality operator it is not equal and thats the function of a Symbol data type 
const id = Symbol('123');
const anotherid = Symbol('123');

console.log(id === anotherid);

const bigNumber = 4533333323534353n;




//reference (non primitive)
//Array, Objects , Functions

const heros = ["Shaktiman" , "ironman" , "captionAmerica"];
let myInfo = {
    name : "Rajwinder",
    age : 23,

}
const myFunction = function(){
    console.log("Hello World");
};

console.log(typeof(score));
console.log(typeof(temp));
console.log(typeof(myFunction));

console.log(typeof(heros));
console.log(typeof(myInfo));


//Data type of null , array , object is object

// https://262.ecma-international.org/5.1/#sec-11.4.3

// =============================

//understanding storing memoring 

//Stack (Primitive) and Heap (Non Primitive)
//The stack is a memory space where JavaScript stores simple values like numbers, strings, booleans, and function calls. The stack works in a "last in, first out" (LIFO) manner, so each time a function is called, a new "frame" is added to the stack to keep track of it. When the function finishes, the frame is removed.
//The stack is fast but limited in size. It only holds simple, short-lived data, making it ideal for variables and function calls that don’t need to persist long-term.
//The heap is a larger, flexible area of memory used for storing objects and arrays. Unlike simple values, objects and arrays are more complex and can grow in size. Because they don’t fit neatly into the stack, JavaScript stores them in the heap.

let myYoutubename = "Rajwinder Singh";
let anotherName = myYoutubename;
anotherName= "chaiaurcode";

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email : "user@emailcom",
    addr : "jkfbndkj",
}

let userTwo = {
    email: "initial@domain.com",
    addr: "anotherAddress",
};
 userOne = userTwo;

userTwo.email = "Rajwinder@gmai.com";
console.log(userOne.email);
console.log(userTwo.email);