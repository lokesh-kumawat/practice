// practics question 2 

let gameNumber =23;

let usernumber= prompt("Guess the game number ");

while(usernumber != gameNumber){
    usernumber = prompt("You guess the wrong number. Guess again");
}

console.log("congratulation you guess the right number");