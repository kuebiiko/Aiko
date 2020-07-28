const fetch = require('node-fetch');

module.exports = {
	name: 'doggo',
    description: 'get a random picture of a dog',
    usage: 'l.doggo',
	execute(message) {
            async function bork() {
              const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
              
              const animuHugEmbed = {
                color: 0x53bed4,
                title: `bork`,
            
                image: {
                    url: url,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: animuHugEmbed});

            }

            bork();



  },
};