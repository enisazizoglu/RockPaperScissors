let humanScore = 0;
let computerScore = 0;
let drawScore = 0;
let round = 1;





function getComputerChoice() {
    const computerChoices = ["rock", "paper", "scissors"];
    const finalAIChoice = Math.floor(Math.random() * computerChoices.length);
    return computerChoices[finalAIChoice];
}

let humanChoice;
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", function() {
        humanChoice = this.id;
        playRound();
    });
});


function playRound() {
    const Human = humanChoice;
    const Computer = getComputerChoice();

    if (Human === "rock" && Computer === "scissors" ||
        Human === "scissors" && Computer === "paper" ||
        Human === "paper" && Computer === "rock") {
        humanScore++;
    } else if (Human === Computer) {
        drawScore++;
    } else {
        computerScore++;
    }
    round++;
    document.getElementById("round").innerHTML = `Round: ${round}`;
    document.getElementById("humanscore").innerHTML = `İnsan: ${humanScore}`;
    document.getElementById("computerscore").innerHTML = `Bilgisayar: ${computerScore}`;
    document.getElementById("computerchoice").innerHTML = `Bilgisayar seçim: ${Computer}`;
    document.getElementById("drawscore").innerHTML = `Berabere: ${drawScore}`;

    console.log("-------------")
    console.log(`İnsan: ${humanScore} Seçim: ${Human}`);
    console.log(`Computer: ${computerScore} Seçim: ${Computer}`);
    console.log(`Berabere: ${drawScore}`);
    console.log("-------------------------")
}

/*
function playGame() {
    for (let round = 1; round <= 5; round++) {
        document.getElementById("round").innerHTML = `ROUND: ${round}`;
        playRound();
    }
    console.log("Oyun bitti!");
    console.log(`Sonuçlar - İnsan: ${humanScore}, Bilgisayar: ${computerScore}, Berabere: ${drawScore}`);
}
*/


