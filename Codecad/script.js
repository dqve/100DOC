let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
  return Math.floor(Math.random()*9)
}

const getAbsoluteDistance = (value1, value2) => {
  return Math.abs(value1 - value2)
}

const compareGuesses = (humanGuess, computerGuess, secretNumber) => {
  
  let humAgg = getAbsoluteDistance(humanGuess, secretNumber)
  let comAgg = getAbsoluteDistance(computerGuess, secretNumber)
  
  if(humAgg < 0 || humAgg > 9){
   return alert('number is out of range')
  }else if(humAgg == comAgg){
    return true
  }else if (humAgg > comAgg){ 
    return false
  }else if (comAgg > humAgg){
    return true        
    }
}


const updateScore = (winner) => {
  if(winner === 'computer'){
    computerScore += 1;
  }else{
    humanScore += 1;
  }
}

const advanceRound = () => {
  return currentRoundNumber += 1
}