//console.log("hello jay");


//computer choice :-
function getComputerChoice() {
    let choiceOfComputer = Math.random();
    if(choiceOfComputer <=0.3) {
        return 1 // 1 stands for Rock
    }

    else if(choiceOfComputer > 0.3 && choiceOfComputer <= 0.6) {
        return 2 // 2 stands for paper
    }

    else {
        return 3 // 3 stands for scissor
    }
}

// Human's choice
function getHumanChoice() {
    let choice = Number(prompt("Enter your choice : 1 for Rock, 2 for paper and 3 for scissor"));
   //input validation
   while( choice !==2 && choice !== 1 && choice !== 3){
    choice = Number(prompt("Enter your choice : 1 for Rock, 2 for paper and 3 for scissor"))
    
   }
    return choice;
}

//player's score 
let humanScore = 0;
let computerScore = 0;


//logic for one round

function playround( humanChoice = getHumanChoice() , computerChoice = getComputerChoice()) {
    //choice display
    console.log("your choice = ",humanChoice);
    console.log("computer choice = ", computerChoice);
    
    
    if( humanChoice ==computerChoice){
        console.log("It is Tie");
        return ;
    }
   
    else if(humanChoice ==1 ){
        if(computerChoice == 2){
            console.log("Oh, you lose");
            computerScore++ ;
        }
        else{
            console.log("yah, you win");
            humanScore++ ;
        }
    
    }

    else if( humanChoice ==2){
        if(computerChoice == 3){
            console.log("Oh, you lose");
            computerScore++ ;
        }

        else{
            console.log("yah, you win");
            humanScore++ ;
        }
    }

    else if( humanChoice == 3){
        if( computerChoice ==1){
            console.log("Oh, you lose");
            computerScore++ ;
        }

        else{
            console.log("yah, you win");
            humanScore++ ;
        }
    }
}

function playgame(){
    let i = 0;
    while(i<5){
        playround();
        i++;
    }
}

playgame();
console.log( "you = ", humanScore ," V/s ", "computer = ", computerScore);

