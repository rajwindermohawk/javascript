const score = 100;

const balanca = new Number(100);
console.log(balanca)

console.log(balanca.toString());
console.log(balanca.toString().length);
//this function is used to specify the number of decimal lpaces and return it as string 
console.log(balanca.toFixed(1));

//Purpose: Formats a number to a specified total number of significant digits (not just decimal places).
let num = 123.456;

console.log(num.toPrecision(4));  // Outputs: "123.5"
console.log(num.toPrecision(6));  // Outputs: "123.456"
console.log(num.toPrecision(2));  // Outputs: "1.2e+2"

const hundreds = 10000000;
console.log(hundreds.toLocaleString());

console.log(hundreds.toLocaleString('en-IN'));


//To understand more about the number to go the chrome and type number in the consoke and then type. and then check the functions

//==================================
//Maths
 //Go to chrome and type console.log(maths)and check uot the maths properties

 console.log(Math);
 console.log(Math.abs(-6));
 console.log(Math.round(4.2)
 );
 console.log(Math.floor(4.9));
 console.log(Math.ceil(4.3));

 console.log(Math.min(3,4,43,34,33,3));

 console.log(Math.max(3,4,43,34,33,3));

 // the value of math.random will alwayes be between 0 and 1

 console.log(Math.random());
 console.log((Math.random()*10)+1);
 console.log((Math.random()*10)+1);

 //lets make formula to get a random number using start and end values.

 const min = 10;
 const max = 20 ;

 console.log(Math.floor(Math.random() * (max - min + 1) ) + min );