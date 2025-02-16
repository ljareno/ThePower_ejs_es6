// 14 

function rollDice(caras) {
    const numero = Math.floor(Math.random() * caras + 1)
    return numero
}

console.log(rollDice(6)); 
console.log(rollDice(20)); 
console.log(rollDice(2)); 
  