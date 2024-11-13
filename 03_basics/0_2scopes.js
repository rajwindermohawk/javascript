let a =23434;
    if(true){
        let a = 10
        const b = 20 
        var c = 30 
    }

    console.log(a); // now this will output because a varible is already declared outside of the function so it is not using that a variable declared inside that funnction
   // console.log(a);

   //console.log(b);   
  //both of the above will give error because they are declared in the function and cannot be accessed outside of that function  and this is called block scope 
console.log(c);//this is global scope 


//some info about nested scope 
function one(){
    const Username ="Rajwinder"
    function two(){
        const website = "Rajwinder@mybusiness.com";
        console.log(Username)//inner function can access variable of the outer function 
    }
    // console.log(website); this is because outer function can not access the inner vairables directly 
    two()//this will be executed
}
one()

//here one is bigger and two is small so one can access all the variable of the two but two 


if(true){
    const userName = "Rajwinder";
    if(userName === "Rajwinder"){
        const website = "youtube";
        console.log(userName + website);
    }
   // console.log(website)//wesite is defined in the above scope so cannot be accessed here 

}
//console.log(userName); same here 






//===========Interesting Concept======
//console.log(addOne(5)); the functions result can be initilaized before declaring the function here we have just declared the function but we have not hold this function in any function 
function addOne(num){
    return num +1;
}
addOne(5)//here is the vvalue is just being returned but not getting printed

//console.log(addTwo(5)) here if we try to initialized the result before intializing the function in this way it will not work because here hte function is holded in the variable named add two 
const addTwo = function(num){
    return num +2;

}
addTwo(5)