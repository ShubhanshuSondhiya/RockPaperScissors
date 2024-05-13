let userScore = 0;
let compScore = 0;
const user_score = document.querySelector("#user-score");
const comp_score = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msg_container = document.querySelector(".msg-container");

const drawGame = (userChoice) => {
    msg.innerText = `Game was a Draw.Both players chose ${userChoice}`;
    msg.style.backgroundColor = "rgb(0, 0, 92)";
}
const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        user_score.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else{
        compScore++;
        comp_score.innerText = compScore; 
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const genCompChoice =() =>{
    const options = ["Rock","Paper","Scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};
const playGame = (userChoice) => {
    const compChoice = genCompChoice();  
    if(userChoice===compChoice){
        drawGame(userChoice);
    }
    else{
        let userWin = true;
        if(userChoice==="Rock"){
            userWin = compChoice === "Paper" ? false : true;
        }
        else if(userChoice === "Paper"){
            userWin = compChoice === "Scissors" ? false : true;
        }
        else{
            userWin = compChoice === "Rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

