//in simple terms we have did some kind of coding work and we have to do same kind of work multiple times so what we do is we package all those lines of code into a package so that we use that same code for multiple times with least time 

function saymyname(){
    console.log("Rajwinder");
    console.log("singh");

    

    
}
//saymyname this alone is just an reference to the function but saymyname(); this with brackets is the refering to calling that function

saymyname();

function addTwoNumbers(Number1,number2){
    console.log(Number1 + number2)
}
addTwoNumbers(4 , "4");
addTwoNumbers(44,343);
addTwoNumbers(3,"null");

// this can also be stored in a variable but with the given syntax it output result undefined
const result = addTwoNumbers(343,343);
console.log("result",result)

//so to fix this issue we need the use the return method
function sumOfNumbers(num1,num2){
    results = num1 + num2;
    return results;
}
const numbers = sumOfNumbers(232,34)
console.log("Result:", numbers)

function logInUserMessage(Username){
    return `${Username} just logged In`;
}
const userinfo = logInUserMessage('Raj');
console.log(userinfo);
//what if we don't declare any value to the function what will be the output the output will be undefined we can solve this issue by add an if else statement
console.log(logInUserMessage());

function updatedfunc(nameofuser = "Raj"){
    if(!nameofuser){
        console.log("enter user name")
        return
    }
    return `${nameofuser} just logged In`;
}
console.log(updatedfunc());


//in the real life projects like e commerce apps we have to create a shopping cart like in th above function we knew that it will will do the addition of only two numbers but in that shoppping card a person can buy number of things

//to solve the problem we use rest operator this ... is the rest operator
function calculateCartPrice(...num1){
    return num1

}
console.log(calculateCartPrice(200,400,500))

function calculateCartPric(val1,val2, ...num1){
    return num1

}
console.log(calculateCartPric(200,400,500,3443,434))

//objects
const user = {
    Username : "Rajwinder",
    price: 199
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.Username} and the price is ${anyObject.price}`)
}
handleObject(user)
handleObject({
    Username:"Raj",
    price: 200
})

//using funcitons in an array
const myNewArray = [200,320,232,23,3];
function returnSecondValue(getarray){
    return getarray[1]
}
console.log(returnSecondValue(myNewArray))