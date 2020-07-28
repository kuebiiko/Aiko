const fetch = require('node-fetch');

module.exports = {
	name: 'programmingjoke',
    description: 'nobody understands...',
    usage: ' ',
	execute(message) {
            async function joke() {
              const { joke } = await fetch('https://sv443.net/jokeapi/v2/joke/Programming?blacklistFlags=nsfw,political,racist,sexist&type=single').then(response => response.json())
              const jokeEmbed = {
                color: 0x53bed4,
                title: `here's a programming joke:`,
                description: joke,
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: jokeEmbed});

            }

            joke();



  },
};