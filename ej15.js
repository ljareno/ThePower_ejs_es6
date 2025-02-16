// 15

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, indice1, indice2) {
    const valor1 = array[indice1]
    array[indice1] = array[indice2]
    array[indice2] = valor1
    return array
}

console.log(swap(fantasticFour, 0, 3))
console.log(swap(fantasticFour, 1, 2))
