// this is a singleton object and the below is a non singleton object const tinderuser = new Object();

const tinderuser = {}
tinderuser.id = "00234676";
tinderuser.name = "raj";
tinderuser.isLoggedzin =false;

console.log(tinderuser);

//declaring a object inside an object
const regularUser = {
    email:"Rajwinder@gmail.com",
    fullName : {
        FirstName:"Rajwinder",
        LastName: "Singh"
    }
}
//assesing a nested value
console.log(regularUser.fullName.FirstName);


const obj1= {
    value:"a",
    value2:"b"
};
const obj2 = {
    value3 : "c",
    value4: "d"
}
/*
the below code outputs this {
  obj1: { value: 'a', value2: 'b' },
  obj2: { value3: 'c', value4: 'd' }
}
  so this will not work
 */


// const obj3 = {obj1 ,obj2};
// console.log(obj3);
//method to merge two arrays
//{} here {} are the target means where is the concated object from both the object will go and others sre the sources means which objcets will go 
const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);
/* here ist he outcome of this 
{ value: 'a', value2: 'b', value3: 'c', value4: 'd' }
 */


/*
other easy way to do this is that 
const obj3 = {...obj1, ...obj2};
console.log(obj3);
*/

const users = [
    {
    id: 1,
    email: "raj@gail.com"
    },
    {
        id: 1,
        email: "raj@gail.com"
        },
        {
            id: 1,
            email: "raj@gail.com"
            },
            {
                id: 1,
                email: "raj@gail.com"
                },
];
console.log(users[1].email);

console.log(tinderuser);
//these will return array and its type will be object
console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(typeof(Object.keys(tinderuser)));

//the following function will return its result in boolean based on wheather the object has that property or not 
console.log(tinderuser.hasOwnProperty('isLoggedin'));

const course = {
    coursename: "js course in hindi",
    price: "999",
    courseInstrutor: "Rajwinder"
};
//  course.courseInstrutor

/* Destructuring Assignement 
{ courseInstrutor } is the destructuring syntax. It tells JavaScript, "Extract the courseInstrutor property from the course object and assign its value to a new constant also named courseInstrutor."
 */
const { courseInstrutor } = course;
console.log(courseInstrutor);
/* this is the data int he json format
{
    "name": "hitesh",
    "courseName": "js in hindi",
    "price": "free"
}
    */

 