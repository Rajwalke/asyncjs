// const radius=[1,2,3,4];


// const circumfernce=function (arr){
//     const output=[];
//     for(let i=0;i<arr.length;i++){
//         output.push(2*Math.PI*arr[i]);
//     }
//     return output;
// }

// const criclearea=function (arr){
//     const output=[];
//     for(let i=0;i<arr.length;i++){
//         output.push(Math.PI * arr[i] * arr[i]);
//     }
//     return output;
// }

// console.log("cricumference",circumfernce(radius));
// console.log("area of circle",criclearea(radius));


// Optimize code 

const radius=[1,2,3,4,5];

const area=(num)=>{
    return 2*Math.PI*num;
}

const cricumfernce=(num)=>{
    return Math.PI * num*num;
}


function calculateAboutCircle(arr,cal){
    const output=[];
    for(let i=0;i<arr.length;i++){
        output.push(cal(arr[i]));
    }
    return output;
}
console.log("Area of Following radius",calculateAboutCircle(radius,area));
console.log("Circumfernce of following radius",calculateAboutCircle(radius,cricumfernce));