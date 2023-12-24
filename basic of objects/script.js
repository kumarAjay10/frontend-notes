// object literals:- used to store keyed collection & complex entities //

// property => (key,values)pair 

/* example 
 student 
 name "Ajay" -> property 1
 age "20"  -> property 2
 marks 94.4 -> property 3
 |       |                
 key     values */


 // creating object literals //
//   let student = {
//     name : "Ajay",
//     age : 20,
//     marks: 94.4,
//     city: "delhi"
//   };
//   console.log(student);


//   const item = {
//     price : 100.00,
//     discount : 50,
//     color : ["red","pink"]
//   };

//   console.log(item);


// get values //
// syntax: obj.key or obj["key"] -> always prefer

//   const item = {
//     price : 100.00,
//     discount : 50,
//     color : ["red","pink"]
//    };

//   console.log(item.discount);
//   console.log(item["color"]); 


/* get value :- Js automatically converts object keys to strings
hence we can use reseved words of js in keys 
eample */

// const obj = {
//     1 : "a",
//     2 : " b",
//     true : "c",
//     null : "d",
//     undefined : "e",
// };
// console.log(obj);


// Add and update and delete values 

//    let student = {
//      name : "Ajay",
//      age : 20,
//      marks: 94.4,
//      city: "delhi"
//    };
//   console.log(student);

//   // add 
//   student.gender = "male";
//   console.log(student);

//   // update
//   student.city ="mumbai";
//   console.log(student);

//   // delete
//   delete student.city;
//   console.log(student);


// object of object : string information of multiple //
// (nested object)
//  const classInfo ={
//     aman :{
//         grade : "A+",
//         city: "Delhi",
//     },
//     shradha :{
//         grade : "A",
//         city: "mumbai",
//     },
//     karan : {
//         grade : "o",
//         city: "pune",
//     },
//  }
//  console.log(classInfo);
//  console.log(classInfo.aman.city);
//  console.log(classInfo["shradha"]["city"]);


// Arrays of object 

//   const classInfo =[
//     {
//         name : "aman",
//          grade : "A+",
//          city: "Delhi",
//      },
//      {
//         name : "shradha",
//          grade : "A",
//          city: "mumbai",
//      },
//      {  
//         name : "karan",
//          grade : "o",
//          city: "pune",
//     },
// ];
// console.log( classInfo[1].name);
// console.log(classInfo[0],classInfo[1],classInfo[2]);
// console.log( classInfo[2].city);



// Math object 

// console.log(Math.PI);
// console.log(Math.E); // euler's number 
  
// console.log(Math.abs(-9)); // which gives only positive number 
// console.log(Math.pow(3,4)); // used to find exponential values
// console.log(Math.floor(4.888)); // converts to whole number 
// console.log(Math.ceil(7.33)); // nearest largest number 
// console.log(Math.random()); // gives the random value 0 t0 9

// random integer 


// let step1 = Math.random();
// let step2 = step1 * 10; //  multiple the maximum number 
// let step3 = Math.floor(step2);
// let step4 = step3 + 1 ;
// console.log(step4);

//  let random = Math.floor(Math.random()*5) + 1;
//  console.log(random);

// game question (pending)

// question 1

// let diceRoll = (Math.floor(Math.random()*6) + 1);
// console.log(diceRoll);

// question 2

// const car = {
//     name : "BMW",
//     model : "x7",
//     color : "Black"
// };
// console.log(car["name"]);

// question 3

// const person = {
//      name : "xyz",
//      age : 23,
//      city : "patna",
// };
// console.log(person);
// person.city = "New York";
// console.log(person);
// person.country = "united state";
// console.log(person);


