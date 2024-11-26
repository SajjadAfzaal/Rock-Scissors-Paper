let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = () =>{
    console.log("Game was draw");
    msg.innerText = "Game was Draw. Play Again";
    msg.style.backgroundColor =  "#081b31";
};

const showWinner = (userWin , userChoice , compChoice) =>{
    if(userWin === true){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost.  ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";

    }
};

const playGame = (userChoice) =>{
    console.log("User Choice: ",userChoice);
    //Generate CPU choice
    const compChoice = genComputerChoice();
    console.log("Computer Choice: ",compChoice);

    if(userChoice === compChoice){
        //Draw condition
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            // papers , scissors
            userWin = compChoice === "paper" ? false: true;
        }
        else if(userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "rock"? true: false;
        }
        else{
            //rock, paper
            userWin = compChoice === "paper"? true: false;
        }
        showWinner(userWin, userChoice ,compChoice);
    }
};

choices.forEach ((choice)=>{
    choice.addEventListener("click" , ()=>{
        const userChoice = choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    })
});