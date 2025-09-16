// Promise.all([]);
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 get Sucees")
//     },3000)
// })
// const p2=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("p2 get Sucees")
//     // },2000)
//     setTimeout(()=>{
//         reject("p2 Rjected")
//     },2000)
// })
// const p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p3 get Sucees")
//     },1000)
// })

// Promise.all([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err);
// })


// Promise.allSettled([])
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 get Sucees")
//     },3000)
// })
// const p2=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("p2 get Sucees")
//     // },2000)
//     setTimeout(()=>{
//         reject("p2 Rjected")
//     },2000)
// })
// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("p3 get Sucees")
//     // },1000)
//     setTimeout(()=>{
//         reject("p3 Rjected")
//     },1000)
// })

// Promise.allSettled([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err)
// })



// Promise.race([]);
// const p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("p1 get Sucees")
//     },4000)
//     // setTimeout(()=>{
//     //     reject("p1 Rjected")
//     // },3000)
// })
// const p2=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("p2 get Sucees")
//     // },2000)
//     setTimeout(()=>{
//         reject("p2 Rjected")
//     },2000)
// })
// const p3=new Promise((resolve,reject)=>{
//     // setTimeout(()=>{
//     //     resolve("p3 get Sucees")
//     // },1000)
//     setTimeout(()=>{
//         reject("p3 Rjected")
//     },5000)
// })
// Promise.race([p1,p2,p3]).then((result)=>{
//     console.log(result);
// })
// .catch((err)=>{
//     console.error(err)
// })

// Promise.any([])
const p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("p1 get Sucees")
    },4000)
    // setTimeout(()=>{
    //     reject("p1 Rjected")
    // },3000)
})
const p2=new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("p2 get Sucees")
    // },2000)
    setTimeout(()=>{
        reject("p2 Rjected")
    },2000)
})
const p3=new Promise((resolve,reject)=>{
    // setTimeout(()=>{
    //     resolve("p3 get Sucees")
    // },1000)
    setTimeout(()=>{
        reject("p3 Rjected")
    },5000)
})

Promise.any([p1,p2,p3]).then((result)=>{
    console.log(result);
})
.catch((err)=>{
    console.error(err);
    console.log(err.errors);
})