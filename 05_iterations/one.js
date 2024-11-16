//basic loop is the for loop

for(let i = 0; i<10 ; i++){
    console.log(i);
}

//
for (let index= 0; index<10; index++){
    const element = index;
    console.log(element);
}
//at the value og the index is initilized and then conditioned is checked and then the function is performed and then the value of the index is incremented

for (let num= 0; num<10; num++){
    const element = num;
    if(element == 5){
        console.log("5 is the best")
    }
    console.log(element);
}
// the best way to visualize loop
for(let i=0 ; i<=10 ; i++){
    console.log(`this is the outer loop ${i}`)
    for(let j=0 ; j<=10 ; j++){
        console.log(`this is the inner loop with value ${j}`)
    }
}

for(let i=0 ; i<=10 ; i++){
    console.log(`this is the outer loop ${i}`)
    for(let j=0 ; j<=10 ; j++){
        // console.log(`this is the inner loop with value ${j}`)
        console.log(i +"*"+j +"="+i*j )
    }
}

//using  for loop in the a array

let Array =["a","b","c","d"];

for(let index = 0 ; index<Array.length; index++){
    const elemenet = Array[index];
    console.log(elemenet)
}

//break ans continue

for( let index = 1; index<=20 ; index++){
    if (index == 5){
        console.log("5 is detected loop is breaked");
        break;
    }
    console.log(`thevalue of i is ${index}`);
}

//the continue is like continuing again for once more 

for( let index = 1; index<=20 ; index++){
    if (index == 5){
        console.log("5 is detected loop is continued");
        continue;
    }
    console.log(`thevalue of i is ${index}`);
}


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