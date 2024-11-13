const name = "Rajwinder";
const age = 20 ;
// console.log(name + age +  " Singh");

console.log(`hello my name is ${name} and my age is ${age}  `);

const gameName = new String('Rajwinder Singh');
console.log(gameName);
//[String: 'Raj']  this will be the output
//Go to console and type const gameName = new String('Raj'); and then game constant 
console.log(gameName[0]);
console.log(gameName.__proto__); // Outputs the String.prototype object
/** 
Explanation: __proto__ (or Object.getPrototypeOf(gameName)) gives access to the prototype of the gameName object.
Since gameName is a String object, gameName.__proto__ will reference String.prototype, the prototype object for all strings. This prototype includes various string methods like .toUpperCase(), .toLowerCase(), .slice(), and many others that allow manipulation of string data.
Outcome: The console will display the String.prototype object, which shows all built-in methods and properties that can be used on gameName.
*/

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,1);
console.log(newString);

const anotherString = gameName.slice(-8,-1);
console.log(anotherString);
// THE DIFFERNECE BETWEEN SLICE AND SUBSTRING FUNCTION IS THAT substring(): Does not accept negative values. If a negative value is provided for startIndex or endIndex, it is treated as 0.
//ANOTHER DIFFERENCE IS THAT substring(): If startIndex is greater than endIndex, it swaps them. This means the function will always extract characters starting from the lower index to the higher index AND If startIndex is greater than endIndex, it returns an empty string (it does not swap the indices).

//TRTIM FUNCTION

const  trimString = "       RAJ ";
console.log(trimString);
console.log(trimString.trim());
//incorrect way to use trim function
//console.log(trim(trimString));

const url = "https://github.com/harshc22/personal%39portfolio/tree/master/src";

console.log(url.replace('%39','-'));


//this funvtion will check does any stirng contains  any specific word and returns the value in true and false 
console.log(url.includes('Rajwinder'));

const pract = "The quick brown fox jumps over the lazy dog";

const words = pract.split(' ');
console.log(words[2]);

const chars = pract.split('');
console.log(chars[4]);
// excepted outcome [ 'The quick brown fox jumps over the lazy dog' ]
const strcopy = pract.split();
console.log(strcopy);
    