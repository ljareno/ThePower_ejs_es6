
// 3.1 
const pointsList31 = [32, 54, 21, 64, 75, 43]
const copia31 = [...pointsList31]

// 3.2 
const toy32 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copia32 = {...toy32}

// 3.3
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const combinado33 = [...pointsList, ...pointsLis2]

// 3.4
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const combinado34 = {...toy, ...toyUpdate}


// 3.5
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const [color1, color2, , ...resto] = colors
console.log(color1)
console.log(color2)
console.log(resto)

const colors_mod = [color1, color2, ...resto]
console.log(colors_mod)