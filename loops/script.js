/* Loops 
 1.for loop
 2. while loop
 3. do while loop */

 /* for loop 
 syntax 
 for( let initalization; condition; updation){
    // do something
 }; */
  

 // example //
//  for(let i=0; i<=5; i++){
//     console.log(i);
//  }

// print odd number 

// for(let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// for(let i=1; i<=15; i++){
//     if(i%2==1){
//         console.log(i);
//     }
// }


// reverse an odd number //
// for(let i=15; i>=1; i=i-2){
//    console.log(i);
// }


//  print even numbers
//  for(let i=0; i<=15; i=i+2){
//    console.log(i);
//  }

// infinite loop //
// for(let i=1; i>=0; i++){
//     console.log(i);
// }

// or 
// for(let i=1; i<=5; i--){
//     console.log(i);
// }


// for(let i=1; ;i++){
//     console.log(i);
// }


// print multiplaction //
// let j=0;
// for(let i=5; i<=50; i=i+5){ 
//    j++;
//    console.log(`5 * ${j} = ${i}`);
// }


// nested for loop //
//  for(let i=1; i<=5; i++){
//    console.log(`outerloop ${i}`);
//    for(let j=1; j<=5; j++){
//       console.log(j);
//    }
//  }


/*while loop
syntax initalisation
 while(condition){
   // do something
   updatation
 } */

//  let i=1;
//  while(i<=5){
//    console.log(i);
//    i++;
//  }


// favorite movie //
//  const favoriteMovie = "Avatar";
//  let guessMovie = prompt("guess the movie name: ");
//  while((guessMovie != favoriteMovie) && ( guessMovie != "quit")){
//    guessMovie = prompt("wrong guess plz try again")
//  }

//  if(guessMovie===favoriteMovie){
//      console.log("congrats");
//  }else{
//    console.log("quit");
//  }


// break 

//   for(i=1;i<=5;i++){
//    if(i==3){
//       break;
//    }
//    console.log(i);
//   }

// loop with arrays
// let fruits = ["apple","mango","banana","grapes"];
// for(let i=0; i<fruits.length; i++){
//    console.log(i,fruits[i]);
// }

// nested for loop 
//  let heroes =[["ironman","spiderman","thor"],[
//    "superman","wonderman","flash"
//  ]];
//  for(i=0; i<heroes.length; i++){
//    console.log(`list ${i}`)
//    for(j=0; j<heroes[i].length; j++){
//       console.log(heroes[i][j]);
//    }
//  }


// for of loop 
/* syntax
for(element of collection){
 do something
} */

// let fruits = ["apple","mango","banana","grapes"];
// for(fruit of fruits){
//   console.log(fruit);
// }

  // for(name of "apnacollege"){
  //   console.log(name);
  // }

// nested for of loop 
// let fruits = [["apple","mango","pineapple"],[
//   "banana","grapes"]];
//   for(list of fruits){
//     console.log(list);
//     for(fruit of list){
//       console.log(fruit);
//     }
//   }
 
// practise question
// let arr = [1,2,3,4,5,6,2,3]
// let num = 2;
// for(let i=0; i<arr.length;i++){
//   if(arr[i]==num){
//     arr.splice(i,1)
//   }
 
// }
// console.log(arr);

// 2 question 
//  let num = 287152;
//  let count = 0;

//  for(let copy = num; copy>0;count++){
  
//    copy= Math.floor(copy/10);
//  }
//  console.log(count);


// 3.question
  // let num = 287152;
  // let sum = 0;
  // let copy = num;
  // while(copy>0){
  //   digit = copy % 10;
  //   sum = sum +digit;
  //   copy= Math.floor(copy/10);
  // }
  // console.log(sum);



  // 4 question 
  // let n = 5;
  // let fact = 1;
  // let i=1;
  // while(i<=n){
  //    fact = fact * i;
  //    i++;
  // }
  // console.log(fact);


  // 5.question 
  // let arr = [22,45,32,65,20,19];
  // let largestNum = 0;
  // for(let i=0; i<=arr.length; i++){
  //   if(arr[i]>largestNum){
  //     largestNum = arr[i];
  //   }
  // }
  // console.log(largestNum);