//Dates 

let myDate = new Date ();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());

console.log(typeof myDate);
// months in js starts from  0 
let myCreatedDate = new Date(2023,0,23);

console.log(myCreatedDate.toDateString()
);
console.log(myCreatedDate.toLocaleDateString());
let myDatedd = new Date ("01-14-2023");
console.log(myDatedd.toLocaleDateString());


//In JavaScript, Date.now() is a static method that returns the current timestamp in milliseconds (ms) since the Unix Epoch (January 1, 1970, 00:00:00 UTC).
let myTimestamp = Date.now();


// Unlike Date.now(), which returns the timestamp for the current date and time, getTime() is used on a specific Date instance to get the timestamp of that particular date and time.
console.log(myTimestamp);
console.log(myCreatedDate.getTime());

//converting this in seconds
//Math.floor function is to prevent it from getting into decimal values
console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
//check out others functions by tying above upto full stop 

console.log(`the Date is ${newDate.getDate()} and the time is ${newDate.getTime()}`);
//this is the function to modify to Lacal function 
console.log(newDate.toLocaleDateString()); 
console.log(newDate.toLocaleDateString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}));
// Example output: "Tuesday, November 12, 2024"
