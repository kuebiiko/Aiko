const fetch = require('node-fetch');

module.exports = {
	name: 'animequote',
    description: 'quote',
    usage: ' ',
	execute(message) {
            async function animeQuote() {
              const anime = await fetch('https://anime-chan.herokuapp.com/api/quotes/random').then(response => response.json())
              const quoteEmbed = {
                color: 0x53bed4,
                title: `here's an anime quote`,
                fields: [
                    {
                        name: 'Quote',
                        value: anime.quote,
                    },
                    {
                        name: 'Character',
                        value: anime.character,
                    },
                    {
                        name: 'Anime',
                        value: anime.anime,
                    },
                ],
                timestamp: new Date(),
            };
            
            // Sends 'animeHugEmbed' to the channel.
            await message.channel.send({embed: quoteEmbed});

            }

            animeQuote();



  },
};