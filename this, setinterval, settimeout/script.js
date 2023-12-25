/* this keyword 
refers to an objectthat is executing current piece of code */

//  const student = {
//      name : "Ajay",
//      age : 23,
//      marks : 80,
//      phy : 56,
//      che : 84,
//      eng : 70,
//      getAvg() {
//          console.log(this);
//          let avg = (this.phy + this.che + this.eng) /3 ;
//          console.log(avg);
//             console.log(this.name);
//      }
 
//  }
//   student.getAvg();


//  function getAvg() {
//    console.log(this); 
//  };
//  getAvg()


// try and catch 

// try is used to block of  code to be tested for errors while it is being excuted

// catch is used allow block of code executed in the error.. if finds in try block...


// console.log("hello")
// try{
//     console.log(a);
// }catch(err){
//     console.log("a is not defined");
//     console.log(err);
// }
// console.log("world");


// Arrow function //
//  const sum = (a,b) =>{
//    console.log(a+b);
//  }
// sum(2,3);


// const cube = n =>{
//     return n*n*n;
// }
//  let c=cube(2);
//  console.log(c);


// implicit return //

// const mul = (a,b) => (a*b)
// console.log(mul(2,3));


//setTimeout(function, timeout)  // always in milliseconds
// setTimeout(()=>{
//  console.log("hello");
// },4000);



// setInterval //


 //setInterval(function, timeout)  // always in milliseconds
//  let id = setInterval(()=>{
//   console.log("hello");
//  },4000);
//  console.log(id);
//  clearInterval(4000);

//  let idx= setInterval(()=>{
//     console.log("hello");
//    },4000);
//    console.log(idx);



// this with arrow function (pending)


// practise question 1 //
//  let square =(n) =>{
//     return n*n;
//  };
//  console.log(square(2));

// question 2 //


// let id = setInterval(()=>{
//     console.log("hello")
// },2000);

// setTimeout(()=>{
//     clearInterval(id);
// },10000);