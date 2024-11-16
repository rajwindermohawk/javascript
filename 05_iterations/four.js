const myObject = {
    js:'javascript',
    cpp:'C++',
    swift: 'swift by apple'
}

for (const key in myObject){
    console.log(key,":",myObject[key])
}

//can we use for in loop in the arrays
const prog = ["js","Java","c++"];
for(const key in prog){
    console.log(prog[key])
}
//another way is  so we concluded that thi way is applicable to array but not to Objects
const progr= ["js","Java","c++"];
for(const key of progr){
    console.log(key);
}


//using in on maps const map = new Map();
const map = new Map();
map.set('In',"India");
map.set('Ch',"CHina");
map.set('Am',"America");
map.set('UK',"England");
map.set('Am',"America");

// console.log(map);

// for(const [key,values] in map){
//     console.log(key,values)
// }
//as we can see for in loop in not applicable in maps



//using foreach statement 
const abc = ["a","b","c","d"];
 
abc.forEach(item => {
    console.log(item);
});
abc.forEach((item,index,abc) => {
    console.log(item,index,abc);
});

const mycoding = [
    { languagename: "javascript", languagefilename: "js" },
    { languagename: "java", languagefilename: "exe" },
    { languagename: "react", languagefilename: "r" },
    { languagename: "kfdjvnkj", languagefilename: "sd" }
];


mycoding.forEach((item)=> {
console.log(item.languagename);
})