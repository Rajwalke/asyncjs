// const cart=["pant","shoes","kurta"];

// const promise = creatorder(cart);
// console.log(promise);

// promise.then((cardid)=>{
//     console.log(cardid);
//     return cardid;
// })
// .catch((errmess)=>{  
//     console.log(errmess);
// })
// .then((cardid)=>{
//    return proceedToPayment(cardid);
//    // console.log(paymetid);
// })
// .then((paymetnid)=>{
//     console.log(paymetnid);
//     return PaymentInfo(paymetnid);
// })
// .catch((err)=>{
//     console.log(err);
// })
// .then((paymetnINfoMess)=>{
//     console.log(paymetnINfoMess);
// })
// .catch((paymenterr)=>{
//     console.log(paymenterr);
// })



// // check the crat is valide or not 
// function creatorder(cart){
//     const pr = new Promise((resolve,reject)=>{
//         // resolve 
//         const cardid="12345";
//         if(cartIsValide(cart)){
            
//             setTimeout(()=>{
//                 resolve(cardid);
//             },1000)

//         }
//         else{
//             const mess=new Error("Cann't get the cartId,Cart is not valid");
//             reject(mess);
//         }
//     });
//     return pr;
// }

// function proceedToPayment(cardid){
//     const pr=new Promise((resolve,reject)=>{
//         if(!cardid){
//             const errms=new Error("orderid is invailde");
//             reject(errms);
//         }
//         else{
//             const paymetid="5454848987";
//             resolve(`PaymetID is ${paymetid}`);
//         }
//     });
//     return pr;
// }

// function PaymentInfo(paymetnid){
//     const pr=new Promise((resolve,reject)=>{
//         if(paymetnid==""){
//             reject("Payment not done");
//         }
//         else{
//             resolve("Payment Done Sucessfully");
//         }
       
//     });

//     return pr;
// }

// function cartIsValide(cart){
//     return true;
// }


// const cart=["shoes","shirt","pant"];
// let accountBalance=5000;
// const promise=creatOrderId(cart);
// console.log(`your Accountbalance is ${accountBalance}`)
// promise.then((orderId)=>{
//     console.log(`OrderID is= ${orderId}`);
//     return orderId;
// })
// .catch((errMes)=>{
//     console.log(errMes);
// })
// .then((orderId)=>{
//    return proceedToPayment(orderId);
// })
// .then((paymetnAmount)=>{
//     console.log(`You have to pay ${paymetnAmount}`);
//     return paymetnAmount;
// })
// .catch((paymetErr)=>{
//     console.log(paymetErr);
// })
// .then((paymetnAmount)=>{
//    return showOrderSummary(paymetnAmount);
// })
// .then(({paidAmount,paymentmsgg})=>{
//     console.log(`₹${paidAmount} ${paymentmsgg}`);
//     return paidAmount;
// })
// .catch((showsummaryError)=>{
//     console.log(showsummaryError);
// })
// .then((paidAmount)=>{
//     // console.log(accountBalance)
//     return upadteWallet(paidAmount,accountBalance);
// })
// .then((accountBalance)=>{
//     console.log(`₹ ${accountBalance.accountBalance} ${accountBalance.message}`);
// })


// function creatOrderId(cart){
//     const pr=new Promise((resolve,reject)=>{
//         if(!validateCart(cart)){
//             const mess=new Error("Cart Item is Not Validate");
//             reject(mess);
//         }
//         const orderId="165897";
//         if(validateCart(cart)){
//             setTimeout(()=>{
//                 resolve(orderId);
//             },1000)
//         }
//     })

//     return pr;

// }

// function proceedToPayment(orderId){
//     const pr=new Promise((resolve,reject)=>{
//         if(!checkOrderID(orderId)){
//             const mess=new Error("OrderID is Invalidate,you can't Proced to paymet");
//             reject(mess);
//         }
//         else{
//             const amount=3000;
//             resolve(amount)
//         }
//     })
//     return pr;

// }
// function showOrderSummary(paymetnAmount){
//     const pr=new Promise((resolve,reject)=>{
//         if(paymentIsPaid(paymetnAmount)){
//             const paidAmount=paymetnAmount;
//             const paymentmsgg=" is paid Succesfully";
//             resolve({paidAmount,paymentmsgg});
//         }
//         else{
//             const errmess=new Error("Payment not done yet");
//             reject(errmess);
//         }
//     });
//     return pr;
// }
// function upadteWallet(paidAmount,accountBalance){
//     const pr=new Promise((resolve,reject)=>{
        
//         resolve({accountBalance:accountBalance-paidAmount,
//             message:"is your account balance"
//         })
//         reject(Error="meaage not found");
//     })
//     return pr;
// }


// function paymentIsPaid(paymetnAmount){
//     return true;
// }

// function checkOrderID(orderId){
//     return true;
// }

// function validateCart(cart){
//     return true;
// }

// Latest revision


const cart=["Shoes","tshirt","pant"];

const promiseresult=cartOrder(cart);
function cartOrder(cart){

    const opr=new Promise((resolve,reject)=>{
        const orderId=1234;
        if(validateCart(cart)){
            resolve(orderId);
        }
        else{
            const err=new Error("CartID is not valide");
            reject(err);
        }
    })
    return opr;

}
function validateCart(nm){
    return false;
}
function validePayment(ID){
    return true;
}
function parymentForOrder(orderID){
    const payinfo=new Promise((resolve,reject)=>{
        const info="Your Payment is Done";
        if(validePayment(orderID)){
            resolve(info);
        }else{
            const payerr=new Error("Payment is Not Dont");
            reject(payerr);
        }
    });
    return payinfo;
}

function orderSummry(payInfo){
    const su=new Promise((resolve,reject)=>{
        if(payInfo){
            resolve("Your OrderID is 1234 paymnet is sucessfully Done..thankyou keep Shooping");
        }else{
            const suerr=new Error("Your payment is remining so we can;t proceed the order,,sorry")
            reject(suerr);
        }
    })
    return su;
}


promiseresult.then((currentOrderId)=>{
    console.log("Current orderID is ",currentOrderId);
        return parymentForOrder(currentOrderId);
}).catch((err)=>{
    console.log(err.message)
})
.then((paymrtinfo)=>{
    console.log(paymrtinfo);
    return orderSummry(paymrtinfo);
})
.then((finalinfo)=>{
    console.log(finalinfo);
})
.catch((err)=>{
    console.log(err.message);
})