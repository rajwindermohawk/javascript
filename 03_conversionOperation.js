let score  = 100;
console.log(typeof score);
let scores = "1sf00";
console.log(typeof (scores));
//this is type casting 
let intValue = Number(scores)

//typeof function checks the type of a variable
console.log(typeof (intValue));

//outputs nan because it is not a number
console.log(intValue)
// when we typecast a null in numnber and then we try to print it return 0
let value = null ;
console.log(typeof value)
let changevalue = Number(value)
console.log(typeof(changevalue))
console.log(changevalue);

// "33" => 33
// "343fv" => nan
// true = 1 and false = 0

let boolea = true;
let convt = Number(boolea);
console.log(convt);

// if do this in opposite way 
let  isfine = 1;
let cinversion = Boolean(isfine);
console.log(cinversion)
 

// if we convert any empty string it will be fale 
let str = "";
let convvrt = Boolean(str);
console.log(convvrt);

// converting a non empty string 
let string = "hello";
let convvr = Boolean(string);
console.log(convvr);
let nmb = 44;
let strnum = String(nmb);
console.log(typeof(strnum))
console.log(strnum);

let vale = 3;
let updatedvalue = -value;
console.log(updatedvalue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);

let srt1 = "hello";
let str2 = "hello2";

let str3 = srt1 + str2;
console.log(str3);

console.log("1" + 2);

console.log(1 + "2");

console.log(1 + 2+ "3");
console.log("1" + 2+ 3);
// the unary operator will convert exp to number so the result will be in the numeber
console.log(+true);
console.log(+"");

let num1, num2, num3 ;
num1 = num2 = num3 = 2 + 2 ;


//prefixs and sufixs 
let gameCounter = 100
gameCounter++;
console.log(gameCounter);

gameCounter--;
console.log(gameCounter);
