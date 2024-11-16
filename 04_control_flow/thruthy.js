const useremail = "rjawinder987sigh@gmil.com";

if(useremail){
    console.log("got user email");

}else{
    console.log("DOntbhave the email");
}
//what if it is a empty string it would consider it as flase so it it will enter the else part of the statement
const usersemail = "";

if(usersemail){
    console.log("got user email");

}else{
    console.log("DOntbhave the email");
}

//false values 
// false , 0,-0,BigInt 0n ,  "",null,undefined , NaN 

//truthy values 
// "0" ,'false',"false", " ", [],{} ,function(){}

const usemail = [];
if(usemail.length ===0){
    console.log("Array is empty")
}

const emptyObj = {};
if (Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}

//on console false == 0 it return true
// false == '' => true
// 0 == '' => true

//now understanding Nullish coalescing Operator (??): null undefined

let val1 ;
val1 = 5 ?? 10;

val2 = null?? 20

var1 = undefined ?? 50
console.log(var1);
console.log(val2)
console.log(val1)

//Terniary Operator

//condition ? true :false

const iceTeaPrice = 100;

iceTeaPrice > 40 ? console.log("greater than 40") : console.log("less than 40");

//this is a shorthand if else statement

