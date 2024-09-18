console.log("This is the one");
var humanScore = 0;
var computerScore = 0;

function getComputerChoice()
{
    let choice = Math.random();
    console.log("The computer picked....");
    if(choice<0.3)
    {
        console.log("Rock!");
        return 1;
    }
    
    else if(choice>0.3&&choice<0.66)
    {
        console.log("Scissors!");
        return 3;
    }
    
    else
    {
        console.log("Paper!");
        return 2;
    }
}

function getHumanChoice()
{
    let humanchoice = (prompt("Enter 1.) Rock 2.)Paper 3.)Scissors"));
    humanchoice = humanchoice.toUpperCase();
    console.log("You picked "+humanchoice+"!");
    return humanchoice;
}

function playRound(hc, cc)
{
    if(hc == "ROCK")
    {
        if(cc == 1)
        {
            console.log("Draw! Rock out!");
        }
        else if(cc == 2)
        {
            console.log("Lose! Paper beats Rock!");
            computerScore = computerScore + 1;
        }
        else
        {
            console.log("Winner! Rock beats Scissors!");
            humanScore = humanScore + 1;
        }
    }
    else if(hc == "PAPER")
    {
        if(cc == 2)
        {
            console.log("Draw! The Paper is mightier than the Gun or something idk");
        }
        else if(cc == 3)
        {
            console.log("Lose! Scissors beats Paper!");
            computerScore = computerScore + 1;
        }
        else
        {
            console.log("Winner! Paper beats Rock!");
            humanScore = humanScore + 1;
        }
    }
    else if(hc =="SCISSORS" || hc == "SCISSOR")
    {
        if(cc == 3)
        {
            console.log("Draw! Snippity Snip!");
        }
        else if(cc == 1)
        {
            console.log("Lose! Rock beats Scissors!");
            computerScore = computerScore + 1;
        }
        else
        {
            console.log("Winner! Scissors beats Paper!");
            humanScore = humanScore + 1;
        }
    }
    else
    {
        console.log("That one doesn't count >:(");
    }
}

function playGame()
{
    let i = 1;
    while(i<=5)
    {
        let hc=getHumanChoice();
        let cc=getComputerChoice();
        playRound(hc,cc);
        console.log("Round-"+i);
        console.log("HumanScore- "+humanScore+"  ComputerScore- "+computerScore+"!");
        i = i+1;
    }
}

playGame();

if(humanScore==computerScore)
{
    console.log("You are as smart as a computer :O");
}
else if(humanScore>computerScore)
{
    console.log("YOU WIN!!!!");
}
else
{
    console.log("you lose :(");
}