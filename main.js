
let gameOn = true
let computer = 0
let you = 0

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', run)
paper.addEventListener('click', run)
scissors.addEventListener('click', run)



function run (e){

  if(gameOn){
  

  let playerMove = e.target.value

  let computerMove = getComputerChoice()

  let result = playRound(playerMove,computerMove)

  if (result === 'You win'){
    console.log(you)
    console.log(computer)
    if(computer != 5 && you != 5){
    
    document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Win!`
    document.getElementById('resultUser').innerHTML = `Player: ${you}`
    document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
    }else{

      gameOn = false
      if(you > computer){
      document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
      document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
      document.getElementById('resultUser').innerHTML = `Player: ${you}`
      document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
      document.getElementById('declareWinner').innerHTML = `YOU WON THE GAME!`
      }else{
        document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
        document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
        document.getElementById('resultUser').innerHTML = `Player: ${you}`
        document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
        document.getElementById('declareWinner').innerHTML = `YOU LOST THE GAME!`
      }
  }
    console.log('You win')
  }else if (result ==='You lose'){
    console.log(you)
    console.log(computer)
    if (computer!= 5 && you != 5 ){
   
    document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Lose!`
    document.getElementById('resultUser').innerHTML = `Player: ${you}`
    document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
    } else{
      gameOn = false
      if (you > computer){
      document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
      document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
      document.getElementById('resultUser').innerHTML = `Player: ${you}`
      document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
      document.getElementById('declareWinner').innerHTML = `YOU WON THE GAME!`
      }else{
        document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
        document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
        document.getElementById('resultUser').innerHTML = `Player: ${you}`
        document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
        document.getElementById('declareWinner').innerHTML = `YOU LOST THE GAME!`
      }
    }
  }else{
    document.getElementById('showPlayer').innerHTML = `You played: ${playerMove}`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `It's a draw!`
    document.getElementById('resultUser').innerHTML = `Player: ${you}`
    document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
    console.log('It\s a draw')
  }
}}


getComputerChoice = ()=> {
 let number =  Math.floor(Math.random() *3)
 if (number === 0){
  return 'Rock'
 }else if (number ===1){
  return 'Paper'
 }else {
  return 'Scissors'
 }
}


function playRound(playerSelection, computerSelection){
  
  //if its a draw return x
  // if player wins return 1
  // if computer wins return
  if (playerSelection === computerSelection){
    return "It's a draw!"
  }else if (playerSelection === 'Rock' && computerSelection ==='Scissors'){
    you +=1

    return "You win"
  }else if (playerSelection === 'Paper' && computerSelection ==='Rock'){
    you +=1
    return "You win"
  }else if (playerSelection === 'Scissors' && computerSelection ==='Paper'){
    you +=1
    return "You win"
  }else{
    computer +=1
    return "You lose"
  }

}

rock.addEventListener('click', run)
paper.addEventListener('click', run)
scissors.addEventListener('click', run)

