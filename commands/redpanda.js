const fetch = require('node-fetch');

module.exports = {
	name: 'redpanda',
    description: 'redpanda',
    usage: 'l.redpanda',
	execute(message) {
            async function fetchRedPanda() {
              const { link } = await fetch('https://some-random-api.ml/img/red_panda').then(response => response.json());

              const redPandaEmbed = {
                color: 0x53bed4,
                title: `Have a cute red panda!`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: redPandaEmbed});
            }

            fetchRedPanda();



  },
};