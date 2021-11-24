let readlines=require("readline-sync")
let number=readlines.questionInt("enter the number")
if(number<10){
    console.log("number is less")
}
else if(number>10 && number<20){
    console.log("number is less than 20")
}
else{
    console.log("number is greater")
}