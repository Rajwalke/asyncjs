
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

function outer(){
    
    function inner(){
        console.log(a)
    }
    let a=10;
    return inner;
}
let a=100;
let x=outer();
x();