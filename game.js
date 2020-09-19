// const prompt = require('prompt-sync')() // signint: true will help us to exit the code if we press ctr+c
const prompt = require('prompt-sync')({ sigint: true })

for (let i = 0; i < Number.MAX_SAFE_INTEGER; i++) {
  const number = Math.floor(Math.random() * 10)
  const guessedNum = prompt("Guess a Number > ")
  if (isNaN(guessedNum)) {
    console.log('Insert a Valid Number, Dumbo!')
  } else {
    if (number == guessedNum) {
      console.log(`Congratzz! You guessed correctly. And you took ${i + 1} turns.`)
      i = Number.MAX_SAFE_INTEGER
    } else {
      console.log(`Loser! You didn't guessed correctly. The correct number is ${number}`)
    }
  }
}

