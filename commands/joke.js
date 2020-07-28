const fetch = require('node-fetch');

module.exports = {
	name: 'joke',
    description: 'Sends a joke into the channel.',
    usage: ' ',
	execute(message) {
            async function joke() {
              const { joke } = await fetch('https://sv443.net/jokeapi/v2/joke/Miscellaneous?blacklistFlags=nsfw,political,racist,sexist&type=single').then(response => response.json())
              const jokeEmbed = {
                color: 0x53bed4,
                title: `here's a *normal* joke:`,
                description: joke,
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: jokeEmbed});

            }

            joke();



  },
};