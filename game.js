//human choice 
const button = document.querySelector(".btn")

let userChoice;
let computerChoice;
let runCount = 0;

function getUserChoice(){
    
button.addEventListener("click", function(e){
    let target = e.target;
       
    switch(target.id)
    {
        case "b1" :
            console.log("Rock is choosen");
            div_human.textContent = "YOU CHOOSE ROCK";
            userChoice = "Rock";
            getComputerChoice();
            break;
        case "b2" :
            console.log("paper is choosen");
            div_human.textContent = "YOU CHOOSE PAPER";
            userChoice = "Paper";
            getComputerChoice();
            break;
        case "b3" :
            console.log("Scissor is choosen");
            div_human.textContent = "YOU CHOOSE SCISSOR";
            userChoice = "Scissor";
            getComputerChoice();
            break;
    }
});

}


//computer choice :-

function getComputerChoice() {
    let choiceOfComputer = Math.random();
    computerChoice;
    if(choiceOfComputer <=0.3) {
        computerChoice = "Rock";
        div_computer.textContent = "JARVIS CHOOSE ROCK";
    }

    else if(choiceOfComputer > 0.3 && choiceOfComputer <= 0.6) {
        computerChoice = "Paper";
        div_computer.textContent = "JARVIS CHOOSE PAPER";
    }

    else {
        computerChoice = "Scissor";
        div_computer.textContent = "JARVIS CHOOSE SCISSOR";
    }

    console.log("computer choose " , computerChoice);
    playround();
}

//player's score
let humanScore = 0;
let computerScore = 0;


//game logic
function playround(){
 runCount++;
 round.textContent = "ROUND : " + runCount;


    let choice_human = userChoice;
    let choice_computer = computerChoice;

    if(choice_human ==choice_computer){
        console.log("It is Tie");
        div_result.textContent = "IT IS TIE👾";
    }
   
    else if(choice_human =="Rock" ){
        if(choice_computer == "Paper"){
            console.log("OH, YOU LOSE💔");
            div_result.textContent = "OH, YOU LOSE💔";
            computerScore++ ;
        }
        else{
            console.log("YAH< YOU WIN😎");
            div_result.textContent = "YAH< YOU WIN😎";
            humanScore++ ;
        }
    
    }

    else if(choice_human =="Paper"){
        if(choice_computer == "Scissor"){
            console.log("OH, YOU LOSE💔");
            div_result.textContent = "OH, YOU LOSE💔";
            computerScore++ ;
        }

        else{
            console.log("YAH< YOU WIN😎");
            div_result.textContent = "YAH YOU WIN😎";
            humanScore++ ;
        }
    }

    else if(choice_human == "Scissor"){
        if( choice_computer =="Rock"){
            console.log("OH, YOU LOSE💔");
            div_result.textContent = "OH, YOU LOSE";
            computerScore++ ;
        }

        else{
            console.log("YAH< YOU WIN😎");
            div_result.textContent = "YAH< YOU WIN😎";
            humanScore++ ;
        }
    }
 score.textContent = "You = " + humanScore + "  V/S   Computer = " + computerScore ;

    if( runCount ==5){
        winner();
    }
    else{
        div_finResult.textContent = "";
    }
}

//winner
function winner(){
    console.log("winner declaration")
    if(humanScore > computerScore)
    {
        console.log(" You Rock");
        div_finResult.textContent = " WINNER, YOU ROCK🙌";
    }

    else if( humanScore < computerScore)
    {
        console.log("Oh, Computer win");
        div_finResult.textContent = "TRY NEXT TIME😢";
    }

    else{
        console.log("It is Tie");
        div_finResult.textContent = "sweet TIE😵‍💫";
    }
    
    runCount = 0;
    humanScore = 0;
    computerScore =0 ;
    
}

getUserChoice();


//Dom manipulation for result
 const div_human = document.querySelector("#human");
 const div_computer = document.querySelector("#computer");
 const div_result = document.querySelector("#result");
 const div_finResult = document.querySelector("#finalResult");
 const button12 = document.querySelector("#top");
 const score = document.querySelector("#score");
 const btn = document.querySelector(".btn");

 button12.addEventListener("mouseover", () =>{
    button12.textContent ="NOT ME 😒";
    button12.addEventListener("mouseout", () =>{
        button12.textContent = "TAP TO PLAY";
    })
 }
)

score.addEventListener("mouseover", () =>{
    score.textContent ="AGAIN, NOT ME🤦‍♂️";
    score.addEventListener("mouseout",() =>{
        score.textContent = "SCORE-BOARD";
    } )
})

const round = document.querySelector("#round")
