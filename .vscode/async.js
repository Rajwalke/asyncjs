

// function valide(){
//     return true;
// }
// const pr=new Promise((resolve,reject)=>{
//     if(!valide()){
//         const err="wrong Promise,need to change the promise"
//         reject(err);
//     }
//     resolve("Promise Resolved Value,no need to change");
// })
// async function getNmae(){
//     const ans=await pr;
//     console.log(ans);
//     // return pr;
//     // return "RajWalke";
// }
// getNmae();

// const userName=getNmae();
// console.log(userName);
// userName.then((result)=>{
//     console.log(result)
//     // setTimeout(()=>{
//     //     console.log(result)
//     // },5000);
// })
// .catch((err)=>{
//     console.error(err);
// })

const pr=new Promise((resolve,reject)=>{
    // resolve("Promise is resolve");
    reject("reject the Promise");
})

async function getname(){
    return pr;
}
const data=getname();
console.log(data);
data.then((val)=>{
    console.log(val);

})
.catch((err)=>{
    console.error(err);
})