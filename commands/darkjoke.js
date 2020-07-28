const fetch = require('node-fetch');

module.exports = {
	name: 'darkjoke',
    description: 'is this offensive?',
    usage: 'l.darkjoke',
	execute(message) {
            async function joke() {
              const joke = await fetch('https://sv443.net/jokeapi/v2/joke/Dark?type=twopart').then(response => response.json())
              const jokeEmbed = {
                color: 0x53bed4,
                title: `here's a dark joke:`,
                fields: [
                    {
                        name: 'Setup',
                        value: joke.setup,
                    },
                    {
                        name: 'Delivery',
                        value: joke.delivery,
                    },
                ],
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: jokeEmbed});

            }

            joke();



  },
};