//const coding = ["a","b","c","d"];

// const value = coding.forEach((item)=> {
//     //console.log(item);
//     return item
// })
// console.log(value)


const mynums = [1,2,3,4,5,6,7,8,9,10];
 const myfilter = mynums.filter((num)=> num>4)
 //another way to return is that it is necessary to write return key word in this scope {}
 const newNums = mynums.filter((num)=>{
 return num >4    
 })
console.log(myfilter);

/// Using forEach (corrected method name)
const newNumber = [];
mynums.forEach((num) => {
    if (num > 4) {
        newNumber.push(num);
    }
});
console.log(newNumber);  // Output: [5, 6, 7, 8, 9, 10]

const books = [
    { name: "The Catcher in the Rye", genre: "Fiction", publishYear: 2001 },
    { name: "To Kill a Mockingbird", genre: "Fiction", publishYear: 1960 },
    { name: "1984", genre: "Dystopian", publishYear: 1949 },
    { name: "The Great Gatsby", genre: "Fiction", publishYear: 1925 },
    { name: "Moby Dick", genre: "Adventure", publishYear: 1851 },
    { name: "Pride and Prejudice", genre: "Romance", publishYear: 1813 },
    { name: "The Hobbit", genre: "Fantasy", publishYear: 1937 },
    { name: "War and Peace", genre: "Historical Fiction", publishYear: 1869 },
    { name: "The Odyssey", genre: "Epic", publishYear: -800 },
    { name: "Crime and Punishment", genre: "Psychological Fiction", publishYear: 1866 }
];

//suppose i want the books whose genre is history 
// const userBooks = books.filter( (bk) =>{
//     if(bk.genre=== "Fiction"){
//         return true
//     }
//     return false
// })
// console.log(userBooks);


//to print the books published after 2000
let userBooks = books.filter((bk)=> bk.publishYear >2000)
console.log(userBooks)


//adding or its genre should be fiction 
const userBook = books.filter((bk)=> bk.publishYear >2000 || bk.genre ==='Fiction')
console.log(userBook)