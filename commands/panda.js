const fetch = require('node-fetch');

module.exports = {
	name: 'panda',
    description: 'redpanda',
    usage: 'l.redpanda',
	execute(message) {
            async function panda() {
              const { link } = await fetch('https://some-random-api.ml/img/panda').then(response => response.json());

              const pandaEmbed = {
                color: 0x53bed4,
                title: `panda boi`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: pandaEmbed});

            }

            panda();



  },
};