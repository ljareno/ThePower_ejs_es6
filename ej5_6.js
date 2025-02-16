// 5.6 

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

// const input_value = 'u'

const streamers_filt = (input_value) => {
	streamers.filter((streamer) => streamer.name.includes(input_value.target.value))
}

const input = document.querySelector("input");
input.addEventListener("input", streamers_filt);
