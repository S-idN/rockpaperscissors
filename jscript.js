
var humanScore = 0;
var computerScore = 0;
var ogh=0;
var ogc=0;
let i = 0;
let choice = 0;
const rockbutton = document.querySelector("#rock");
const paperbutton = document.querySelector("#paper");
const scissorsbutton = document.querySelector("#scissors");
console.log("This is the one");
console.log(rockbutton);
const res=document.querySelector("#Result");
const hums=document.querySelector("#Human-Score");
const comps=document.querySelector("#Computer-Score");
const win=document.querySelector("#winner");
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
    choice =rockbutton.addEventListener("click",playRoundRock);
    choice = paperbutton.addEventListener("click",playRoundPaper);
    choice = scissorsbutton.addEventListener("click",playRoundScissors);
    //playGame();
    return choice;
}

function playRoundRock()
{
    i = i + 1;
    let cc= getComputerChoice();
    playRound("ROCK",cc);
}

function playRoundPaper()
{
    i = i + 1;
    let cc= getComputerChoice();
    playRound("PAPER",cc);
}

function playRoundScissors()
{
    i = i + 1;
    let cc= getComputerChoice();
    playRound("SCISSORS",cc);
}

function playRound(hc, cc)
{
    ogc=computerScore
    ogh=humanScore;
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
    console.log("Round-"+i);
    console.log("HumanScore- "+humanScore+"  ComputerScore- "+computerScore+"!");
    var flag=resultprint(humanScore,computerScore,ogh,ogc);
    if(flag==1)
    {
        humanScore=0;
        computerScore=0
    }
}


function resultprint(hs,cs,ogh,ogc)
{
    hums.textContent="Human:"+hs;
    comps.textContent="Computer:"+cs;
    if(hs==ogh&&cs==ogc)
    {
        win.textContent="Drawn round";
    }
    else
    {
        if(hs>ogh)
        {
            win.textContent="Round won by Humans!"
        }
        else
        {
            win.textContent="Round won by Computers!"
        }
    }
    if(hs!=5&&cs!=5)
    {
        return 0;
    }
    if(hs==5)
    {
        win.textContent="   Humans win! (The world is saved :O)"
        hums.textContent="  Human:"+hs+" WINNER!";
        comps.textContent=" Computer:"+cs+" WOMP WOMP";
        hs=0;
        cs=0;
        return 1;
    }
    else if(cs==5)
    {
        win.textContent="   Computers win! (The robots have taken over D:)"
        hums.textContent="  Human:"+hs+" WOMP WOMP!";
        comps.textContent=" Computer:"+cs+" WINNER!";
        hs=0;
        cs=0
        return 1;
    }
}

let hc = getHumanChoice();
