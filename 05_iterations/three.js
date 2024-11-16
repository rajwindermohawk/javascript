// for of loops this a array specific loop
// ["","","",""]
// [{},{},{},{}]


/* for in  loop  is like foreach (arrays as array) in php which is used to iterate over each value of hte string ,array,maps
so i js we write this as
given
*/


const friuts = ["apple","banana","cherry","peach"];
for(const friut of friuts
){
    console.log(friut);
}


//for .. in loop is used to iterate ier the keys in a object 

const obj = {name:"rajwinder",age:20,city:"Rauni"}
for(const key in obj){
    console.log(key ,':', obj[key])
}


//let try this on a string

const str = "Hello my name is Rajwinder";
for (const st of str){
    if(st== " "){
        continue;
    }
    console.log("the given string is ",st)
}


//Maps is a collection of key and values and it keeps the order as it is sets

const map = new Map();
map.set('In',"India");
map.set('Ch',"CHina");
map.set('Am',"America");
map.set('UK',"England");
map.set('Am',"America");//if we tryb to add same key value pair it will not print it because maps are known for its uniqueness and it keeps in ht same order as it is entered 


console.log(map);
for(const key of map){
    console.log(key);
}/*[ 'In', 'India' ]
[ 'Ch', 'CHina' ]
[ 'Am', 'America' ]
[ 'UK', 'England' ]
 whats how it outputs ther esult in separate arrays */


 for(const [key,values] of map ){
    console.log(key,":=",values)
 }

//for objects we use in iteration 
 const myObject = {
    'game1' : 'NSF',
    'game2' : 'Spiderman'
 }

 for(const key in myObject){
    console.log(key,myObject[key]);
 }