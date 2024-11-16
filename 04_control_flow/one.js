//if 
//to run this if statement this condition must be true 
// if(condition){

// }

if(false){
    console.log("this is false");
}

//trying if condtion 

const isloggedIn = true;
if(isloggedIn){
    console.log("yes the user is logged in");
}
//comparisno operators <,>,<=,>=,== this is to check weather it is equal or 
//= this is the assignment operator
//=== this check the data and its type 

if(2 == "2"){
    console.log("executed");
}
if(2 != 4){
    console.log("executed");
}
if(2===2){
    console.log("execuuted");
}

const temperature = 34
if(temperature<40){
    console.log("the temperature is less than 50")
}else{
    console.log("the temperautre is greater than 100")

}

const score = 200;
if(score >100){
    const power = "fly";
    console.log(`user Power: ${power}`)
}
 //console.log(`user Power: ${power}`) out of scope

 const balance= 1000
if(balance> 500) console.log("test"),
console.log("test2");

//this is an multiple if else if and else statement

if(balance <500){
    console.log("less than");
}else if (balance< 700){
    console.log("less than 700")
}else if(balance< 900){
    console.log("less than 900")
}else{
    console.log("less than 1200")
}


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(loggedInFromEmail || loggedInFromGoogle){
    console.log("allow user to log in ")
}
if(userLoggedIn && debitCard){
    console.log("Allow user to log In")
}

