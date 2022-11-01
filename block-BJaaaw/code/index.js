// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = prompt ("Enter Number")

if(num=num % 2 == 0){
  alert("number is even")
}else {
  alert("number is odd")
}

// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let Num1 = prompt("Enter a number")
let Num2 = prompt("Enter another number")
if (Num1>Num2) {
  alert (` max value is ${Num1}`);
} else if (Num1<Num2){
  alert(`max value is ${Num2}`)
}


// // 3. Convert the above code using`?` terniary operator
Num1>Num2 ?
   alert(`${Num1} is greater than ${Num2}`):
   alert(`${Num2} is greater than ${Num1}`)  

/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
// */
let houseName = prompt("Enter your house name")
if (houseName == "stark") {
  alert ("winter is coming");
} else if (houseName=="lannister"){
  alert ("A lannister always pays his debt");
} else {
  alert("All the men must die");
}




// 5. Convert the above code using`?` terniary operator
houseName === 'stark' ? alert ("winter is coming")
 : houseName=="lannister" ? alert ("A lannister always pays his debt")
  : alert("All the men must die");



// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
// let month = prompt("Enter serial number of month");

switch(Number(month)){
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert ("number of days is 31")
    break;
  case 2:
    alert("28 or 29days");
    break;
  case 4:
  case 6:
  case 9:
  case 11:
    alert("number of days is 30");
  default:
      alert("Match not found")  
  }   
   
  


/* 7.
- Write a program that take the salary of the user using prompt and alert the in -hand amount.You will find out the in-hand amount by deducting the tax amount from salary.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let Salary = Number (prompt ("Enter your Salary"));
switch (true){
  case Salary <= 20000:
    alert(`Your in-hand salary is ${Salary-(Salary*10/100)}`)
    break;
  case Salary <= 40000:
    alert(`Your in-hand salary is ${Salary-(Salary*20/100)}`)
    break;
  case Salary > 50000:
    alert(`Your in-hand salary is ${Salary-(Salary*30/100)}`)
    break;
  default:
    alert ("Match not found")
}


//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`


*/
let marks = Number(prompt("Enter the marks"));

if (marks > 100){
  alert("Marks can't be greater than 100");
}
else if (marks >= 80 && marks < 100){
  alert("Grade A");
}
else if (marks >= 50 && marks < 80){
  alert("Grade B");
}
else if (marks >= 30 && marks < 50){
  alert("Grade C");
}  
else {
  alert("Grade D");

}  



/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/
let weather = prompt("What is your weather like outside?");
switch (weather){
  case ("sunny"):
    alert ("Wear a T-shirt");
    break;
  case ("rainy"):
    alert ("Dont'forget to take your raincoat");
    break;
  case ("hanky"):
    alert ("Get a hanky");
    break;
  case ("freezing"):
    alert ("Get your sweater on");
    break; 
  default:
    alert("Not a valid input");
}
 
