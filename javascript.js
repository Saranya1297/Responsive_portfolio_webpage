// function add(a,b, exp){
//     switch(exp) {
//         case "+":
//             console.log("Add", a+b);
//             // break;
//         case "-":
//             console.log("Sub", a-b);
//             // break;
//         case "*":
//             console.log("Multiply ", a*b);
//             // break;
//         case "/":
//             console.log("Division:", a/b);
//             // break;
//         default:
//             console.log("Invalid Sign");
//             // break;
//     }
//     // let x=a+b;
//     // console.log(x);
// } 


// add(7,12, "*");

// let a=[10,11,13,14,15];
// sum=0;
// for(let i in a){
//     sum+=a[i];
// } 
// console.log(sum);

// var a = 10
// if(a>=0){
//     console.log("Positive")
// }
// else{
//     console.log("Negative")
// }


let a = 2016
if(a%4==0){
    if(a%100==0){
        if(a%400==0){
            console.log("leap year") //if the year is century it is divisible by 4 might not be that is not leap year so we need to check it is divisible by both 100 and 400 then it is called leap year
        }
        else{
            console.log("not leap year")
        }
    }
    else{
        console.log("leap year") // if the number is not century it is divisible 
    }
}
else{
    console.log("not leap year")
}

// perform calculation

let num1=10;
let num2=20;

let op="+"

switch(op){
case "+": console.log(num1 + num2)
            break;
case "-": console.log(num1 - num2)
            break;
case "/": console.log(num1/num2)
            break;
default: console.log("invalid operator")  
         break;                
}