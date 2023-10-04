
// !   Math Methods  



// ?  Question 1



// var a = +prompt("Enter a positive integer");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// if (a<0){
//     document.write("not a positive integer");
// }else{
//     document.write("round value of integer : "," ",b);
//     document.write("<br>");
//     document.write("floor value of integer : "," ",c);
//     document.write("<br>");
//     document.write("ceil value of integer : "," ",d);
// };



// ?  Question 2



// var a = +prompt("Enter a negative floating point number");
// var b = Math.round(a);
// var c = Math.floor(a);
// var d = Math.ceil(a);
// if (a>0){
//     document.write("not a negative floating point number");
// }else{
//     document.write("number : "," ",a);
//     document.write("<br>");
//     document.write("round value of number : "," ",b);
//     document.write("<br>");
//     document.write("floor value of number : "," ",c);
//     document.write("<br>");
//     document.write("ceil value of number : "," ",d);
// };



// ?  Question 3



// var a  = +prompt("enter a negative or positive number");
// var b = Math.abs(a);
// document.write("the absolute value of : "," ",a," ","is"," ",b);



// ?  Question 4



// var diceRoll = Math.floor( Math.random() * 6 ) +1;
// document.write("random dice value : "  + diceRoll);



// ?  Question 5



// var coin = Math.floor( Math.random() * 2 ) ;
// if (coin < 1){
//     document.write(coin,"<br>","random coin value : "," ","Heads");
// }else{
//     document.write(coin,"<br>","random coin value : "," ","Tails");
// };



// ?  Question 6



// var random = Math.floor(Math.random()*100);
// document.write("random number between 1 and 100 : "," ",random);



// ?  Question 7



// var a = prompt("Enter your weight in kilograms");
// var b = parseInt(a)
// document.write("the weight of user is :"," ",b," ","kilograms")



// ?  Question 8



// var a = 8;
// var b = +prompt("Guess a number between 1 to 10 ");
// if (b===a){
//     document.write("congratulations you guess the correct number");
// }else{
//     document.write("Try again!");
// };



// !   Date Methods



// ?  Question 1



// var a =  new Date();
// document.write(a);



// ?  Question 2



// var a = new Date();
// var b = a.toString(a.getMonth())

// document.write(b);



// ?  Question 3



// var a = new Date();
// var b = a.getDay()
// var c = ["sun","mon","tue","wed","thu","fri","sat"];

// document.write("Today is : " + c[b] + ".");



// ?  Question 4



// var day = new Date();
// var today = day. getDay();
// var daylist = ["sun","mon","tue","wed","thu","fri","sat"];

// if(today==[0,6]){
//     document.write("its fun day");
// }else{
//     document.write("its working day");
// };



// ?  Question 5



// var date = new Date();
// var b = date.getDate();
// if(b<16){
//     document.write("first fifteen days of the month");
// }else{
//     document.write("last days of the month");
// };



// ?  Question 6



// var a = new Date("january 1 , 1970 , 12:00:00");
// var b = a.getTime(a.getMinutes());
// document.write("minutes since jan 1 1970 : "," ",b);



// ?  Question 7



// var date = new Date(); 
// var hour = date. getHours(); 
// if(hour<12){
//     document.write("its Am");
// }else{
//     document.write("its Pm");
// };

 

// ?  Question 8



// var a = new Date("december 31,2020");
// document.write("later date : "," ",a);



// ?  Question 9



// var a = new Date("1 april ,2022");
// var b = new Date("5 oct,2023");
// var c = a.getTime()-b.getTime();
// var d = c / (1000 * 60 * 60 * 24);
// var e = Math.abs(d);
// document.write(e," "," days have passed since 1st Ramadan of 2022",);



// ?  Question 10



// var a = new Date("1 january,2023");
// var b = new Date("5 october,2023");
// var c = a.getTime(a.getSeconds()) - b.getTime(b.getSeconds());
// var d = Math.abs(c);
// document.write(d," ","seconds have passed since begining of 2023");



// ?  Question 11
// ?  Question 12
// ?  Question 13
// ?  Question 14