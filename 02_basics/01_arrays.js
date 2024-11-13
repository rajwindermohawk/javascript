//array 
// array is an object where multiple data can be stored under a sinlge variabel name array are resizable and can be a  mix of data 
//array make shallow is a A shallow copy creates a new object with the same top-level properties as the original like the changes made will be shown in original refernecw as well (Heap)
//deep copy A deep copy duplicates not only the top-level properties but also all nested objects, meaning all levels of the object are copied.
//ways of declaring arrays

const myarr = [0,1,2,3,4,5]
const myheros = ["shaktiman", "ironman","superman","batman"];

//another way of declasring array and there are no assocaisitive array
const myarr2 = Array(1,3,4,4,5,5,3,3,53,5);
console.log(myarr[0]);

//array methods

//this will add this number to the array
myarr2.push(6)
console.log(myarr2);

//pop method will remove the last number int he array

myarr2.pop();
console.log(myarr2);

//unshift this will add the any element to the first of the array 

myarr2.unshift(10);
console.log(myarr2);

//this will remove the first element from the array
myarr2.shift();
console.log(myarr2);

// this will chek wheather the element is in the array or not and retutrns and a booleran value
console.log(myarr.includes(3));
console.log(myarr.includes(434));
console.log(myarr.indexOf(3));

//the the element dose not exist the indexpf will return -1
console.log(myarr.indexOf(993));

//the join is a function that conmbines all the elemenet of a array into a sngle array
const newArr = myarr.join();
console.log(newArr);
console.log(typeof(newArr));

//slice and splice methods 

console.log("A",myarr);

//the function will take the a section from the array
const my1 = myarr.slice(1,3);

console.log(my1);
console.log("B",myarr);

const my2 = myarr.splice(1,3);
console.log(my2);
console.log("C",myarr);

// the differnece between the slice and splice is that splice function change the array and splice includes the last element of the delimiter and whereas in the slice functions the array deos not change

