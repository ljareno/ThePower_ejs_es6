// 7.1 

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const notas = exams.reduce((accumulator, current) => accumulator + current.score,0)
console.log(notas)

// 7.2 

const aprobados = exams.filter(exam => exam.score >= 5)
const notas_aprobados = aprobados.reduce((accumulator, current) => accumulator + current.score,0)
console.log(notas_aprobados)


// 7.3 

const media = exams.reduce((accumulator, current) => accumulator + current.score,0) / exams.length;
console.log(media)
