console.log("Rajwinder Singh");


//constant is a think that it used to store variables that can not be changed
const ProductID = 00034899;
console.log(ProductID);


// const keyword cannot be changed
// const ProductID = 0004544;
// console.log(ProductID);
let email = "rajwinder987singh@gmail.com";
console.log(email);
var accountPassword = "00454";
console.log(accountPassword);

// javascript allow to declare the variables like this because it a loosely typer language
accountCity = "Amritsar";

// console.Table this command will give the output in the tabular form and dont forget to use {} when using console.log
console.table({ProductID,accountPassword,accountCity,email});

// difference between var and let is that 


// first let is the block based function means it only be acessed within the block or these brackets {}   whereas var is the accessible outside of the block like 
function usingVar(){
    if(true){
        var x = 5;
    }
    console.log(x);// var can be accessible 
}
usingVar()
// function usinglet(){
//     if(true){
//         let x = 5;
//     }
//     console.log(x);
// }
// usinglet()

// Second reason is the hosting which is variable dedclared wiht var can be initialized before declaring like this will output undefined 

console.log(a);
var a = 5;

// console.log(b);
// let b = 5; this will result in error

// third redeclaration like
var x = 5;
var x = 10; // No error, x is re-declared and updated

// let y = 15;
// let y = 20; // Error: Identifier 'y' has already been declared
 