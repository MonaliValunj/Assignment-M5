//get user choice
let userChoice = window.prompt("Enter your choice : (Rock/Paper/Scissor)")
document.write("user choice: "+ userChoice + "<br>");

//if the user enters something other than rock, paper, or scissors 
    if( userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissor"){
        window.alert("Please Enter valid input")
    }

//Create the computer’s choice. 
cc = Math.round(Math.random()*2);   //generates random numbers between 0-2
console.log("computerChoice (random number): " + cc)

//reset computer’s choice random numbers to a string value of rock, paper, or scissors instead.
let computerChoice = " ";
if(cc === 0 ){
    computerChoice = "rock";
}else if(cc === 1){
    computerChoice = "paper";
}else if(cc === 2){
    computerChoice = "scissor";
}
document.write(" computer Choice : "+ computerChoice);

//check the user’s choice in relation to the computer’s choice. 

if(userChoice === "rock" && computerChoice === "scissor"){
    window.alert("You won!!"); //Rock destroys scissors.
}else if(userChoice === "paper" && computerChoice === "rock"){
    window.alert("You won!!"); //Paper covers rock.
}else if(userChoice === "scissor" && computerChoice === "paper"){
    window.alert("You won!!");//Scissors cut paper.
}else if(userChoice === "rock" && computerChoice === "paper"){
    window.alert("You lost!!");
}else if(userChoice === "paper" && computerChoice === "scissor"){
    window.alert("You lost!!");
}else if(userChoice === "scissor" && computerChoice === "rock"){
    window.alert("You lost!!");
}else if(userChoice === computerChoice){
    window.alert("tie")
}