
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolve .it is ready");
//     }, 10000);
// })

// function getname(){
//     pr.then((result)=>{
//         console.log(result);
//         console.log("Namaste JS");
//     })
// }
// getname();
// async function getName(){
    // const ans=await pr;
    // console.log(ans);
//     return pr;
// }

// getName();
// const fun=getName();
// fun.then((result)=>{
//     console.log(result);
// })

// Example 1
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolve .it is ready");
//     }, 10000);
// })
// const pr2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolve .it is ready");
//     }, 5000);
// })


// async function getName(){
//     const ans=await pr;
//     console.log("Namste js");
//     console.log(ans)

//     const ans2=await pr2;
//     console.log("Hello ji");
//     console.log(ans2);
// }


// Example 2
// const pr=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolve .it is ready");
//     }, 5000);
// })
// const pr2=new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Promise Resolve .it is ready");
//     }, 10000);
// })


// async function getName(){
//     // console.log("Hello World");
//     const ans=await pr;
//     console.log("Namste js");
//     console.log(ans)

//     const ans2=await pr2;
//     console.log("Hello ji");
//     console.log(ans2);
// }

// function getName(){
//     pr.then((res)=>{
//         console.log(res);
//     })
//     console.log("Namste js");
// }
// getName();

// await keyword

// const pr=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Promise is Resolve");
//     },10000);

//     // reject("Promise is Reject");
// })
// async function handlePromise(){
//     const ans=await pr;
//     console.log("Namaste Javascipt");
//     console.log(ans);

// }
// handlePromise();

// function printr(){
//     pr.then((val)=>{
//         console.log(val);
//     })

//     console.log("Namste Javascipt");
// }
// printr();

// const pr1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Pr1 is resolve");
//     },5000);
// })

// const pr2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Pr2 is resolve");
//     },10000);
// })
// async function handlePromise(){
//     console.log("Hello World")
//     const ans1=await pr1;
//     console.log(ans1);
//     console.log("Namste Javascript1");

//     const ans2=await pr2;
//     console.log(ans2);
//     console.log("Namste Javascript2");
    

// }
// handlePromise();
// const API_URL="https://api.github.com/users/Rajwalke";
// async function fecthKeyword(){
//     try{
//         const urldata=await fetch(API_URL);
//         const jsonVal=await urldata.json();
//         console.log(jsonVal);
//     }
//     catch(err){
//         console.log("wrong url");
//     }

// }
// fecthKeyword();

const pr=new Promise((resolve,reject)=>{
    if(!validateCart()){
        reject("Promise is reject");
    }
    else{
        resolve("Promise is Resolve");
    }
})

async function handlePromise(){
    const ans=await pr;
    try {
        // console.log("inside the try");
        // console.log(ans)     
    } catch (err) {
        console.log(`inside the catch ${err}`);
    }


}
handlePromise();
function validateCart(){
    return false;
}