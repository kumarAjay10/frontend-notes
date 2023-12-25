/* array method
1. forEach
2 map
3. filter
4.Every
5.some
6.reduce */


// forEach syntax : arr.forEach() //

// let arr = [1,2,3,4,5];

// function print(el){
//     console.log(el);
// }
// arr.forEach(print);



// arr.forEach((el)=>{
//     console.log(el);
// });

// map method  syntax : arr.map() //
// let arr = [1,2,3,4,5];
// let double = arr.map((el)=>{
//   return el*2;
// })
// console.log(double);

// filter method syntax : arr.filter()

// let arr = [1,2,3,4,5,6,7,8,9,10];

// let even = arr.filter((el) =>{
//        return el % 2==0 
//     });

// console.log(even);


// every: return true if every element gives true or returns false
// let arr = [1,3,5,7,9]
// let odd =arr.every((el)=> el%2==0);
// console.log(odd);


// some  : return true if some element gives true or else false

//  let arr = [1,2,5,7,9]
//  let odd =arr.some((el)=> el%2==0);
//  console.log(odd);

// reduce method syntax: reduce(accumlator , element) = accumlator always start with 0
// finding max in array //

// let arr = [34,56,78,29,23];
// let result = arr.reduce((max,el)=>{
//     if(el > max){
//         return el
//     }else{
//         return max
//     }
// });
// console.log(result);


// let arr = [34,56,78,30,23];
// let mul = arr.every((el)=>{
//  return el%10==0;
// })
// console.log(mul);

// finding minimum array 

// let arr = [34,56,78,29,23];
// let result = arr.reduce((a,b)=>{  
//     if(a < b){
//         return a
//     }else{
//         return b
//     }
// });
// console.log(result);

// default parmeter //



