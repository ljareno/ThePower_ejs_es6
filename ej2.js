
// 2.1
const game = {title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020}

const {title, gender, year} = game
console.log(title)
console.log(gender)
console.log(year)

// 2.2

const fruits = ['Banana', 'Strawberry', 'Orange'];

const [fruit1, fruit2, fruit3] = fruits
console.log(fruit1)
console.log(fruit2)
console.log(fruit3)


// 2.3

const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

const {name, race} = animalFunction()
console.log(name)
console.log(race)

// 2.4 

const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

const {name: name_24, itv} = car
console.log(name_24)
console.log(itv)
const [year1, year2, year3] = itv
console.log(year1)
console.log(year2)
console.log(year3)