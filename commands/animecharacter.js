const fetchLink = 'https://api.jikan.moe/v3/search/character'
const fetch = require('node-fetch');
const querystring = require('querystring');



module.exports = {
	name: 'character',
    description: 'nobody understands...',
    usage: ' ',
	execute(message, args) {
        const query = querystring.stringify({ q: args.join(' ') });

            async function search() {
              const character = await fetch(`${fetchLink}?${query}`).then(response => response.json())
              const searchEmbed = {
                color: 0x53bed4,
                title: character.results[0].name,
              url: character.results[0].url,
              fields: [
                {
                  name: 'Anime',
                  value: character.results[0].anime[0].name,
                  inline: true,
                },
                {
                  name: 'Manga',
                  value: character.results[0].manga[0].name,
                  inline: true,
                },
        
              ],
	            thumbnail: {
		            url: character.results[0].image_url,
              },
              
	        
};
            await message.channel.send({embed: searchEmbed});
            }

            search();



  },
};