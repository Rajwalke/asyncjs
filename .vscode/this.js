// this in global space
// "use strict"
console.log(this);

// this in funciton
function fn(){
    // differnt in srict mode and non strict mode
    console.log(this);
}

fn();

// this inside non strict mode - this substritution

// this inside strict mode
fn(); //op-undefined
window.fn(); //op- window object

// this inside object methode

const obj1={
    a:"raj",
    b:function(){
        console.log(this.a);//this is refers to the object
    }
}
obj1.b(); //op-raj

// this inside call apply binf methods
const obj2={
    a:"walke"
}
obj1.b.call(obj2);


// this inside arrow function
const obj={
    // a:function(){
    a:"Akshay",
    b:function(){
        const c=()=>{
            console.log(this);//this is refers to the object (obj);
        }
        c();
    },
    d:()=>{
        console.log(this); //this is refers to the window object
    }
    
}
obj.b();
obj.d();