const user ={
    username : "Rajwinder",
    price : 990,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the page`)
    
    }
}

// user.welcomeMessage this will be executed but will not return anything
user.welcomeMessage()
user.username= "Raj" //here we have changed the current context means if after the value in the useername will be Raj not Rajwinder
user.welcomeMessage()

//console.log(`${username},welcome to the page`) we cannot access the username this way  so we will use this.username to refer the current context 
/*but in htis code if we add console.log(this) the followig will be the output const user ={
    username : "Rajwinder",
    price : 990,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to the page`)
        console.log(this);
    }
}
    */
console.log(this);//in the browser it logs the window object


// function city(){
//     console.log(this)here in this code it refers to the global object in browser it is window but in node js it is flobal object
// }
// city()

function city(){
    let username = "Rajwinder";
    console.log(this.username)
}
city()//even here the this method id only useful in objects but not in the function as we can see the outcome is undefned


//declaring function through arrows

const cityfunction = () => {
    let username = "Punjab";
    console.log(this.username);//undefined 
}
cityfunction()

//arrow fuction ()
const addTwo = (num1,num2) => {
    return num1 + num2;
}
console.log(addTwo(3,32))

//another way to declare this function is that 

const addOnes = (num1,num2)=>num1 + num2 ;
//if we wrap the content in the curly braces it is nessay to write retur but without it it is nit necceary

//if we try this on a object 

// const addthree = (num1,num2) => {username: "Raj"};//this will return undefined htis is beacuse it is important to use proper brackets

// console.log(addthree(2,3));
const addthree = (num1,num2) => ({username: "Raj"});
console.log(addthree(2,3));