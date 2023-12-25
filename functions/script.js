/* functions 
console.log is a function 
push() is a function 
*/

 /*syntax 
  function funcName() {
      do something 
  }

  function calling ( using the function)
  funcName() */

  // example 1 //

//   function funcName() {
//     console.log("hello");
//   }

//   funcName();


// example 2 //
//  function print1to5() {
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
//  }
//  print1to5();


// example 3 //
// function isAdult() {
//     let age = 17;
//     if(age>=18){
//         console.log("you are an adult");
//     }else{
//         console.log("you are not an adult");
//     }
// }
// isAdult();


// practise que roll dice using function 

// function rollDice() {
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random);
// }
// rollDice();


/* function with arguments : value to pass the function 
syntax 
function funcName(arg1,arg2,....){
    // do something
}
funcName(arg1,arg2) */

// example //
// function funcName(a,b){
//     sum= a+b;
//     console.log(sum);
// }
// funcName(6,3);


// create a function that gives the avg of three number //
// function avg(a,b,c){
//     let avg = (a + b + c) / 3; 
//     console.log(avg);
// }
// avg(3,3,3);


// create a function that creates a multiplacation of a number 

// function mul(n){
//     for(let i=n; i<=n*10; i=i+n){
//         console.log(i);

//     }
// }
// mul(5);


/* return keyword :
return keyword is used to return some value of output */

// example 1 //

// function sum(a,b){
//     let sum = a + b;
//    return sum;
// }
// let s = sum(sum(2,3),4);
// console.log(s);

// create a function that return a number from 1 to n

// function sum(n){
//     let sum = 0;
//     for(let i=1; i<=n;i++){
//         sum = sum + i;   
//     }
//     return sum;
// }
//  let s= sum(10);
//  console.log(s);



// create a function the return a concatenation of a string in an array //

// let str = ["hi","hello","bye!"];
// function concat(str){
//     let result = "";
//     for(let i=0; i<str.length; i++){
//         result = result + str[i];
//     }
//     return result;  
// }
// let c = concat(str);
// console.log(c);



/* scope : scope determines the accessiblity of variables, object and function of different types 
1.function scope 
2. block scope 
3. lexical scope
4. global variable */

// function scope: variable defined inside a function are not accesible outside the function //
// let sum = 55;
// function calSum(a,b){
//     var sum = a + b;
//     console.log(sum);
// }
// calSum(2,3);
//  console.log(sum);// error sum is not defined 


// block scope : var can be used but let and const cannot be used outside the block
// {
//     // var a = 25;
//     let c = 25;
//     const b = 25;
// }
// console.log(a);



// lexical scope //
// function expression //
// high order function //
// methods //