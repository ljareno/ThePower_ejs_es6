// 5.1 

const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages1_filt = ages1.filter(age => age > 18)
console.log(ages1_filt)


// 5.2 

const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const ages2_filt = ages2.filter(age => age %2 === 0)
console.log(ages2_filt)


// 5.3 

const streamers3 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers3_filt = streamers3.filter(streamer => streamer.gameMorePlayed === 'League of Legends')
console.log(streamers3_filt)


// 5.4 

const streamers4 = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const streamers4_filt = streamers4.filter(streamer => streamer.name.includes('u'))
console.log(streamers4_filt)


// 5.5 

const streamers5_filt = streamers4.filter(streamer => {
    if (streamer.gameMorePlayed.includes('Legends')) {
        if (streamer.age > 35) {
            streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
          }
        return streamer  
    } else {
        return false
    }
})

console.log(streamers5_filt)