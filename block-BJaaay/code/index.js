//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for (let i=1; i<=10; i++){
    console.log(i);
}
// Using `console.log` log all the even values from 1 to 10.
for (let i=1; i<=10; i++){
  if(i % 2 == 0){
    console.log(i ,"even");
  }
}
// Using `console.log` log all the odd values from 1 to 10.
for (let i=1; i<=10; i++){
    if(i % 2 !== 0){
        console.log(i,"odd");
    }
}
// Calculate the sum of all numbers from 1 to 10.
let sum = 0;
for(let i =1 ;i <=10 ; i++){
     sum = sum + i;
     console.log(sum);
 }
 // Log all the values from 1 to 10 using while loop
let j = 1
while (j <= 10){
    console.log (j);
    j = j+1;
}
