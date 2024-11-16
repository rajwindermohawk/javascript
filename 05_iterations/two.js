//types of the loops
let index = 1;
while(index<10){
   console.log(`the index is ${index}`);
   index= index+2;
}


let myheros = ["ironman" , "Batman" , "supermna"];
let arr = 0;
while(arr <myheros.length){
   console.log(`the value is myheros ${[arr]}`);
   arr = arr + 1;
}



//practicing do while loop 
let score = 1;
do {
   console.log(`Score is ${score}`)
   score = score +1;

}while(score<=10);

//what if our score is already 11 in this case the output will be scr is 11 because this type of loop do its work first before checking its statement 

let scr = 11;
do {
   console.log(`scr is ${scr}`)
   scr = scr +1;

}while(scr<=10);