//this is wrong way of modifying the array through a finlter becsue filter function can just filter the varibles based on the condition it can not modify it 
const mynums = [1,2,3,4,5,6,7,8,9,10];
// const newnum = [];
// const nmyfunction = newnum.push(mynums.filter((num)=> num +1 ))
// console.log(nmyfunction)


//for this we will use map function 
//const newNums = mynums.map((num)=> num+1);

//if we want to add 1 after multipliying 
const newNums = mynums.map((num)=> num*10)
//the vlue of above willlbe opassed to the second map
.map((num)=> num+1)
//lets apply filter
.filter((num)=> num>40)
console.log(newNums )