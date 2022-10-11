

let computer = 0
let you = 0
document.getElementById('resultUser').innerHTML = `Player: ${you}`
document.getElementById('resultPC').innerHTML = `Computer: ${computer}`
// //create text node
// var newDivText = document.createTextNode('Hello world')

// //add text to div
// newDiv.appendChild(newDivText)


const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.addEventListener('click', chooseRock);
paper.addEventListener('click', choosePaper);
scissors.addEventListener('click', chooseScissors);


function chooseRock (){

  document.getElementById('resultUser').innerHTML = `Player: ${you}`
  document.getElementById('resultPC').innerHTML = `Computer: ${computer}`

  let computerMove = getComputerChoice()
  let result = playRound('Rock',computerMove)

  if (result === 'You win'){
    you += 1
    document.getElementById('showPlayer').innerHTML = `You played: Rock`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Win!`
    console.log('You win')
  }else if (result ==='You lose'){
    computer +=1
    document.getElementById('showPlayer').innerHTML = `You played: Rock`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Lose!`
    console.log('You lose')
  }else{
    document.getElementById('showPlayer').innerHTML = `You played: Rock`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `It's a draw!`
    console.log('It\s a draw')
  }
}
function choosePaper (){

  document.getElementById('resultUser').innerHTML = `Player: ${you}`
  document.getElementById('resultPC').innerHTML = `Computer: ${computer}`

  let computerMove = getComputerChoice()
  let result = playRound('Paper',computerMove)

  if (result === 'You win'){
    you += 1
    document.getElementById('showPlayer').innerHTML = `You played: Paper`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Win!`
    console.log('You win')
  }else if (result ==='You lose'){
    computer +=1
    document.getElementById('showPlayer').innerHTML = `You played: Paper`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Lose!`
    console.log('You lose')
  }else{
    document.getElementById('showPlayer').innerHTML = `You played: Paper`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `It's a draw!`
    console.log('It\s a draw')
  }
}
function chooseScissors (){

  document.getElementById('resultUser').innerHTML = `Player: ${you}`
  document.getElementById('resultPC').innerHTML = `Computer: ${computer}`

  let computerMove = getComputerChoice()
  let result = playRound('Scissors',computerMove)

  if (result === 'You win'){
    you += 1
    document.getElementById('showPlayer').innerHTML = `You played: Scissors`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Win!`
    console.log('You win')
  }else if (result ==='You lose'){
    computer +=1
    document.getElementById('showPlayer').innerHTML = `You played: Scissors`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `You Lose!`
    console.log('You lose')
  }else{
    document.getElementById('showPlayer').innerHTML = `You played: Scissors`
    document.getElementById('showComputer').innerHTML = `Computer played: ${computerMove}`
    document.getElementById('declareWinner').innerHTML = `It's a draw!`
    console.log('It\s a draw')
  }
}


// function choosePaper (){
//   console.log(playRound('paper',getComputerChoice()))
// }function chooseScissors (){
//   console.log(playRound('scissors',getComputerChoice()))
// }


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
    return "You win"
  }else if (playerSelection === 'Paper' && computerSelection ==='Rock'){
    return "You win"
  }else if (playerSelection === 'Scissors' && computerSelection ==='Paper'){
    return "You win"
  }else{
    return "You lose"
  }

}



// now we need function game, take play round and play it 5 times, remember the score

// function game (){
//   let playerWins = 0
//   let computerWins = 0


//   for (let i =0; i < 5; i++){
   
//    let player = getPlayerChoice()
//    let computer = getComputerChoice()

//    let singleGame = playRound(player,computer)

//    if (singleGame ==='x'){
//     playerWins +=1
//     computerWins +=1
//     console.log(`It\'s a draw! Player: ${playerWins} Computer: ${computerWins}`)
//    }else if (singleGame ===`1`){
//     playerWins +=1
//     console.log(`You win! ${player} beats ${computer} Player: ${playerWins} Computer: ${computerWins}`)
//    }else {
//     computerWins +=1
//     console.log(`You lose! ${computer} beats ${player} Player: ${playerWins} Computer: ${computerWins}`)
//    }

//   }
// }
