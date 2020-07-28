const fetchLink = 'https://api.jikan.moe/v3/search/anime'
const fetch = require('node-fetch');
const querystring = require('querystring');



module.exports = {
	name: 'anime',
    description: 'nobody understands...',
    usage: ' ',
	execute(message, args) {
        const query = querystring.stringify({ q: args.join(' ') });

            async function search() {
			  const anime = await fetch(`${fetchLink}?${query}`).then(response => response.json())

			  if (!anime.length) {
				return message.channel.send(`No results found for **${args.join(' ')}**.`);
			} else {
				const searchEmbed = {
					color: 0x53bed4,
					title: anime.results[0].title,
					url: anime.results[0].url,
					description: anime.results[0].synopsis,
					thumbnail: {
						url: anime.results[0].image_url,
					},
					fields: [
					{
						name: 'Episodes',
						value: anime.results[0].episodes,
						inline: true,
					},
					{
						name: 'Score',
						value: anime.results[0].score,
						inline: true,
					},
					{
						name: 'Type',
						value: anime.results[0].type,
						inline: true,
					},
					{
						name: 'Rating',
						value: anime.results[0].rated,
						inline: true,
					},
					{
						name: 'Airing?',
						value: anime.results[0].airing,
						inline: true,
	
					},
			
				],

			}

			await message.channel.send({embed: searchEmbed});
	        
}
            }

            search();



  },
};