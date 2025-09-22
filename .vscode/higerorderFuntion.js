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

// const radius=[1,2,3,4,5];

// const area=(num)=>{
//     return 2*Math.PI*num;
// }

// const cricumfernce=(num)=>{
//     return Math.PI * num*num;
// }

// function calculateAboutCircle(arr,cal){
//     const output=[];
//     // for(let i=0;i<arr.length;i++){
//     //     output.push(cal(arr[i]));
//     // }

//     //using map
//     arr.map((i)=>{
//         output.push(cal(i));
//     })
//     return output;
// }
// console.log("Area of Following radius using map",calculateAboutCircle(radius,area));
// console.log("Circumfernce of following radius",calculateAboutCircle(radius,cricumfernce));

// const arr=[1,2,8,7,6,5,4,3,23,4,5,7,8,87,6,5,3];

// const dos=arr.map((x)=>{
//     return x*2;
// });
// console.log(dos);

// const maxNumber=arr.reduce((acc,curr)=>{
//     // if(acc<curr) acc=curr;
//     return acc+=curr;
// },0)

// console.log("Maximum Number is ",maxNumber); 
// var c=100;
// {
//     var c=10;
//     console.log("inside",c);
// }
// console.log("Outside",c);

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
z();