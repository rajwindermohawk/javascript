//sinlgeton 
//ojects.create

//object literals
const mysbl = Symbol("key1");
const jsUser = {
    name :"Rjawinder Singh",
    age : 18,
    location : "Punjab",
    mysbl :"key1",
    [mysbl] :"key1",
    "full Address": "Rauni Ludhiana",
    email: "Rajwinder@gmail.com",
    isloggedIn: false,
    LastDaysLoggesIn:["Monday","Tuesday"]
}
console.log(jsUser.email);
console.log(jsUser["email"]);
//... dot will not work here 
console.log(jsUser["full Address"]);
console.log(jsUser.mysbl);
console.log(typeof(jsUser.mysbl));

// mysbl :"key1", this is not the right way to declare a function since here symbol is not being used as a symbol as its type is string so use this way    [mysbl] :"key1",



jsUser.email = "Rajwinder@google.ca";
console.log(jsUser);
//this will freeze the object no changes can be done after this 
Object.freeze(jsUser)
jsUser.email = "Rajwinder@nevidia.com";
console.log(jsUser);

// jsUser.greeting = function(){
//     console.log("hello js user");

// }
// //this will outputs Function[anoymous]
// console.log(jsUser.greeting);

//now this says this is not an funciton beacause the object is in freezze mode but it should be working
// console.log(jsUser.greeting());


const newobj ={
    name : "rajwinder Singh",
    course:"cse",
    age: 20,
    college : "Mohawk College"
}
//so in order to tell tis funcion this function is used in the newobj we use this method
newobj.newfun = function(){
    console.log("hello User");
}

newobj.newfunc = function(){
    console.log(`hello jsuser, ${this.name}`);
}
console.log(newobj.newfun());
console.log(newobj.newfunc());