const myNums = [1,2,3,4,5];

// const myTotal = myNums.reduce(function(acc,currentval){
//     console.log(`the acc ${acc} and the currentval is ${currentval}`)
//     return acc+currentval;
// },0)
// console.log(myTotal);


const myTotal = myNums.reduce((acc,curr)=> acc+curr,0)

console.log(myTotal);



shoppingcart = [
    {
      kurtaColor:"red",
      price:3434  
    },
    {
        kurtaColor:"yellow",
        price:3543  
      },
      {
        kurtaColor:"Orange",
        price:566  
      },
      {
        kurtaColor:"purple",
        price:786  
      }
]
const priceToPay  = shoppingcart.reduce((acc,item)=> acc + item.price,0);
console.log(priceToPay);