const comChoice = document.getElementById('com-choice')

const userClick = document.getElementById('user-choice')

const gameResult = document.getElementById('result')

const possibleChoices = document.querySelectorAll('button')



let userChoice;
let computerChoiceDisplay;
let result

possibleChoices.forEach(playerChoice=>playerChoice.addEventListener('click',(e)=>{
    userChoice = e.target.id
    userClick.innerHTML = userChoice
    computerChoice()
    getResult()
}))

//generate computer choice

function computerChoice(){

    const randomNumber = Math.floor(Math.random()*possibleChoices.length);
    
    // console.log(randomNumber)
if(randomNumber=== 1){
    computerChoiceDisplay = 'scissors'
}
if(randomNumber=== 2){
    computerChoiceDisplay = 'paper'
}
if(randomNumber=== 3){
    computerChoiceDisplay = 'rock'
}
comChoice.innerHTML= computerChoiceDisplay;
} 


function getResult(){
    if(computerChoiceDisplay===userChoice){
        result= 'its a draw'
    }
    if(computerChoiceDisplay==='rock' && userChoice==='paper'){
        result= 'you win'
    }
    if(computerChoiceDisplay==='rock' && userChoice==='scissors'){
        result= 'you lost'
    }
    if(computerChoiceDisplay==='paper' && userChoice==='scissors'){
        result= 'you win'
    }
    if(computerChoiceDisplay==='paper' && userChoice==='rock'){
        result= 'you lost'
    }
    if(computerChoiceDisplay==='scissors' && userChoice==='rock'){
        result= 'you win'
    }
    if(computerChoiceDisplay==='scissors' && userChoice==='paper'){
        result= 'you lost'
    }
    gameResult.innerHTML = result
}