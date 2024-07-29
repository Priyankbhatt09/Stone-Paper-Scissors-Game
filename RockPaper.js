let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const scoreboard = document.querySelector(".score-board");
const containButton = document.querySelector("#buttonContainer");



//Changing Mode

let changemode = document.querySelector("#Mode");
let currmode = "light";
let body = document.querySelector("body");
changemode.addEventListener("click" , () =>{
if (currmode=="light"){
    currmode = "dark";
    changemode.style.backgroundColor = "white";
    changemode.style.color ="black";
body.classList.add("dark");
body.classList.remove("light");
changemode.innerText="Light Mode";
containButton.style.border="2px solid white";
changemode.style.transform = "translateX(10px)";
para.style.color="white";


}
else{
    currmode = "light";
    changemode.style.backgroundColor = "black";
    changemode.style.color ="white";
body.classList.add("light");
body.classList.remove("dark");
scoreboard.style.color = "black";
changemode.innerText="Dark Mode";
containButton.style.border="2px solid black";
changemode.style.transform = "translateX(-0px)";
}
console.log(currmode);
});


//Generating Computer Choice
const genCompChoice =() =>{
    const options =["rock" , "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*3);
    return options[randomIndex];
}

//If game is draw

const drawGame =() =>{
    console.log("Game was Draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor ="#081b31";
}

//Shows Winner

const showWinner=(userWin , userChoice , CompChoice)=>{
    if(userWin==true){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win");
        msg.innerText = `You Win Your ${userChoice} beats Computer's ${CompChoice}`;
        msg.style.backgroundColor = "Green";
       
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose");
        msg.innerText = `You Lose. Computer's ${CompChoice} Beats Your ${userChoice} `;
        msg.style.backgroundColor = "Red";
       
}
}

//How the game works

const playGame = (userChoice) =>{
console.log("user choice is " + userChoice);
//Generating computer choice -> modular way
const CompChoice = genCompChoice();
console.log("computer choice is " , CompChoice);

if(userChoice=== CompChoice){
drawGame();
}

else{
let userWin = true;
if (userChoice === "rock"){
    userWin = CompChoice ==="paper"?false:true;
}
else if(userChoice ==="paper"){
    userWin = CompChoice === "scissors"?false:true;
}
else 
{
    userWin = CompChoice === "rock"?false:true;
}
showWinner(userWin , userChoice,CompChoice);
}
}

//Generating By choosing one of the choices

choices.forEach((choice) => {
    choice.addEventListener("click" , () => {
  const userChoice = choice.getAttribute("id");
  playGame(userChoice);
    });
});