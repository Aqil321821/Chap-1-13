//Q1.take a char from user and tell him what is char?
/*
var char = prompt("Enter any character");
var charCode = char.charCodeAt();
if (char >= "0" && char <= "9") {
  console.log(`${char} is a Number`);
} else if (charCode >= 65 && charCode <= 90) {
  console.log(`${char} is a Uppercase letter`);
} else if (charCode >= 97 && charCode <= 122) {
  console.log(`${char} is a lower case letter`);
} else {
  console.log(`${char} is not a number nor a letter`);
}
*/
//Note :on this code when i give 11 it gives me that its a number why so?
/*
The issue you're encountering with your code is due to how JavaScript handles comparisons 
between strings and numbers.
In your code, when you input "11," it's treated as a string, not a number.
The comparison char >= "0" && char <= "9" compares the input string "11" with the string "0" and the string "9".
In lexicographic order (string comparison), "11" is greater than "9" and "0,"
so it evaluates to true and the code identifies it as a number.
 */



               //****************************************//

//Q2.Take city name from user and if its karachi welcome him 
/*
var city=prompt("Enter Your City","Karachi");
if (city==="Karachi") {
    console.log("Welcome to City Of lights")
}
else{
    console.log("Not welcome here!")
}
*/
                //****************************************//

//Q3.Guess Number
/*
var x=parseInt(prompt("Enter Your Number b/w 1-10"));     
var lucky=7;
if (x==lucky-1) {
    console.log("You are near");
} 
else if(x==lucky){
    console.log("Bingoo!");
}
else{
    console.log("Try Again!");
}
*/
             //****************************************//
//Q4.Check if number is divivisble by 3
/*
var y=parseInt(prompt("Enter Your Number to check divisiblity by 3"))

if (y%3==0) {
    console.log("Number is divisible by 3");
}
else{
    console.log("Number is not divisible by 3");

}

*/
                    


                      //****************************************//

//Q4. Make a calculator
/*
var a=parseInt(prompt("Enter 1st number"));
var b=parseInt(prompt("Enter 2nd number"));
var oper=(prompt("Enter operator"));
if (oper==="+") {
    console.log(`Sum of ${a} and ${b} is ${a+b}`);
}
else if(oper==="-") {
    console.log(`diff of ${a} and ${b} is ${a-b}`);
}
else if(oper==="*") {
    console.log(`Product of ${a} and ${b} is ${a*b}`);
}
else if(oper==="/") {
    console.log(` ${a} divided by ${b} is ${a/b}`);
}
else{
    console.log("Wrong Credentials");
}
*/











            