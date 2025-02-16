// 12
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

function findArrayIndex(array, text) {
    const indice = array.indexOf(text)
    if (indice === -1) {
        return `El texto "${text}" no está en el array.`
    }
    return indice
}

console.log(findArrayIndex(mainCharacters, 'Luke'))
console.log(findArrayIndex(mainCharacters, 'Laura'))
console.log(findArrayIndex(mainCharacters, 'Rey'))