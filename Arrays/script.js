// Arrays are mutable 
let fruits = ["apple","mango","orange"];
// fruits[0] = "grapes";

// console.log(fruits);

// push : add an elements at the last
// fruits.push("banana") 
// pop : delete an element at the last
// fruits.pop()
// console.log(fruits);

// shift : remove the element from the beginning

// fruits.shift();
// console.log(fruits);

// unshift : add an element from the beginning
// fruits.unshift("grapes");
//  console.log(fruits);

// indexof : returns indexof something

// 

// console.log(primary.indexOf("red"));
// console.log(primary.indexOf("green"));

// includes : search for a value 
//    let primary = ["red","blue","yellow"];console.log(primary.includes("red"));
//    console.log(primary.includes("green"));

// concate and reverse method 
// let primary = ["red","blue","yellow"];
// let primary2 =["pink","green","black"];
// console.log (primary.concat(primary2));

// reverse method 
// let primary = ["red","blue","yellow"];
// console.log(primary.reverse());

// slice: copies a portion of a array
// let primary = ["red","blue","yellow","pink","green","black"];
//   console.log(primary.slice(2));
//   console.log(primary.slice(2,3)); // (startindex, endindex)
// console.log(primary.slice(-2)); 
// console.log(primary.slice());  

// splice: add/ delete/ replace changes its original array
// let primary = ["red","blue","yellow","pink","green","black"];
// console.log(primary.splice(2,1));
// console.log(primary.splice(4));
// let add = primary.splice(0,1,"white","purple");
// console.log(primary);

// sort : ascending to dscending here want sort numbers
// let primary = ["red","blue","yellow","pink","green","black"];
// primary.sort();
//  console.log(primary);


// array refernce(pending)


// practise que
// let arr = [7,9,0,-2];
// let n = 3;
//  let newArr = arr.splice(0,n);
//  console.log(newArr);

// question 2
// let arr = [7,9,0,-2];
// let n = 3;
//  let newArr = arr.splice(1,n);
//  console.log(newArr);


// question 3
// let str ="";
// if(question  3str.length===0){
//     console.log("string is empty");
// }

// question 4
// let char = "charaCter";
// let idx = 5;
// if(char[idx]==char[idx].toLowerCase()){
//     console.log("lowercase");
// }
// else{
//     console.log("uppercase");
// }