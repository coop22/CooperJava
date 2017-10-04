var mess = "Do you want to play? yes or no, all lowercase";
var mess2 = "Enter a word";
var mess3 = "Do you want to play again? yes or no, all lowercase";
var input = "";
var myWord = "";
var yes = 1;
var no = 100;



do{
input = prompt(mess);

if (input === "yes"){
input = prompt(mess2);
console.log(myWord);


input = prompt(mess3);

}if else (input === "yes"){
input = prompt(mess2);
console.log(myWord += myWord);

}else prompt(mess3);

}while ( input !== "yes")
console.log(myWord ++)
