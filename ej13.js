// 13

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

function removeItem(array, text) {
    const indice_remove = findArrayIndex(array, text)
    if (typeof indice_remove === 'number') {
        array.splice(indice_remove, 1)
    } else {
        return indice_remove
    }
    return array
}
  
console.log(removeItem(mainCharacters, 'Luke'))
console.log(removeItem(mainCharacters, 'Laura'))
console.log(removeItem(mainCharacters, 'Rey'))