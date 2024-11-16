//Immediately Invoked Function Express


function hello(){
    console.log(`DB Connected`)
}
hello();//here we have to write hello() to call this function  but what if i want to call the function immediately after declaring the function so for that we use brackets () and enclose all the function in the brackets ()

(function helllo(){
    console.log(`DB Connected`);
})();

// the iif know that they have to start the function but does know when to end it so note: it is always importrtant ot end the inf using a semi column So this is the reason why the following code will not work if the above code does not end with a semicolumn 

//Immediately Invoked Function Express


function hello(){
    console.log(`DB Connected`)
}
hello();//here we have to write hello() to call this function  but what if i want to call the function immediately after declaring the function so for that we use brackets () and enclose all the function in the brackets ()

(function helllo(){
    console.log(`DB Connected`)
})();

// the iif know that they have to start the function but does know when to end it so note: it is always importrtant ot end and start both the inf using a semi column So this is the reason why the following code will not work if the above code does not end with a semicolumn 

(()=> {
    console.log("heloo World");
});

//another interesting thing about this is 
((name)=> {
    console.log(`hello my name is ${name}`)
})(`Rajwinder`);//what ever code is execution this will take it as a argument and funciton take it as a parameter