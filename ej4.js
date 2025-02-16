
// 4.1

const users41 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names1 = users41.map(user => user.name)
console.log(names1)

// 4.2
const users42 = [
	{id: 1, name: 'Abel'},
	{id:2, name: 'Julia'},
	{id:3, name: 'Pedro'},
	{id:4, name: 'Amanda'}
];

const names2 = users42.map(user => {
    if (user.name[0] === 'A') {
        user.name = 'Anacleto'
    } 
    return user.name
})
console.log(names2)

// 4.3 

const cities = [
	{isVisited:true, name: 'Tokyo'}, 
	{isVisited:false, name: 'Madagascar'},
	{isVisited:true, name: 'Amsterdam'}, 
	{isVisited:false, name: 'Seul'}
];

const names3 = cities.map(city => {
    if (city.isVisited) {
        city.name = `${city.name} (Visited)`
    } 
    return city.name
})
console.log(names3)