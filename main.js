
getComputerChoice = ()=> {
 let number =  Math.floor(Math.random() *3)
 if (number === 0){
  return 'rock'
 }else if (number ===1){
  return 'paper'
 }else {
  return 'scissors'
 }
}

getPlayerChoice = ()=>{ 
  return prompt('Enter your move!').toLowerCase()
}


function playRound(playerSelection, computerSelection){
  //if its a draw return x
  // if player wins return 1
  // if computer wins return
  if (playerSelection === computerSelection){
    return 'x'
  }else if (playerSelection === 'rock' && computerSelection ==='scissors'){
    return `1`
  }else if (playerSelection === 'paper' && computerSelection ==='rock'){
    return `1`
  }else if (playerSelection === 'scissors' && computerSelection ==='paper'){
    return `1`
  }else{
    return `2`
  }
}



// now we need function game, take play round and play it 5 times, remember the score

function game (){
  let playerWins = 0
  let computerWins = 0


  for (let i =0; i < 5; i++){
   
   let player = getPlayerChoice()
   let computer = getComputerChoice()

   let singleGame = playRound(player,computer)

   if (singleGame ==='x'){
    playerWins +=1
    computerWins +=1
    console.log(`It\'s a draw! Player: ${playerWins} Computer: ${computerWins}`)
   }else if (singleGame ===`1`){
    playerWins +=1
    console.log(`You win! ${player} beats ${computer} Player: ${playerWins} Computer: ${computerWins}`)
   }else {
    computerWins +=1
    console.log(`You lose! ${computer} beats ${player} Player: ${playerWins} Computer: ${computerWins}`)
   }

  }
}