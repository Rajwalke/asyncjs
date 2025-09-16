
// console.log("hello");
// setTimeout(()=>{
//     console.log("Namaste ")
// },5000);
// console.log("ramram");

const cart=["Shies","pants","kurta"];

// callback hell 
// api.creattheorder(cart,()=>{
//     api.processedorder(()=>{
//         api.paymet(()=>{

//         })
//     })
// })
// inversion of control 

// const github="https://api.github.com/users/rajwalke";

// const user=fetch(github);
// console.log(user);
// user.then((userdata)=>{
//     console.log(userdata);
// })

// handle the call hell using promise chaning
// api.creattheorder(cart,()=>{
//     api.processedorder(()=>{
//         api.paymet(()=>{

//         })
//     })
// })
// creattheorder(order)
// .then((orderId)=>{
//     return processedorder(orderId);
// })
// .then((paynminfo)=>{
//  return paymentreturn(paynminfo);
// })
// .then((payment)=>{
//     return orderifo(payment)
// })

// function outer(){
    
//     function inner(){
//         console.log(a)
//     }
//     let a=10;
//     return inner;
// }
// let a=100;
// let x=outer();
// x();

// function counter(){
//     var count=0;
//     function increment(){
//         count++;
//         console.log(count);
//     }
//     return increment;
// }
// let counter1=counter();
// counter1();
// counter1();

// let counter2=counter();
// counter2();
// counter2();

function Counter(){
    var count=0;
    this.increment=function (){
        count++;
        console.log("Increment",count);
    }

    this.decrement=function (){
        count--;
        console.log("Decrement",count)
    }
}

let counter1=new Counter();
counter1.increment();
counter1.increment();
counter1.increment();
counter1.decrement();

console.log("------------------------------");
let counter2=new Counter();
counter2.increment();
counter2.increment();
counter2.increment();
counter2.decrement();



