
// let x :number  =1;
// console.log(x);

// function greet ( name:string ){
//     console.log ("hello"+name);
// }

// greet("ayoob");

//sum

// function sum (a:number, b:number ){
//     return a+b;


// }

// let ans=sum(1,2);
// console.log(ans);

// function  booleanfn(age:number ) {
//     if (age>22){
//         return false;
//     }
//     return true;
// }


function delayed (anotherFunction: ()=>void){
    setTimeout(anotherFunction,1000);

}

function  log(){
    console.log("hi there");
}
delayed(log);



