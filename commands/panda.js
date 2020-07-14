const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
	name: 'panda',
    description: 'redpanda',
    usage: 'l.redpanda',
	execute(message, args) {
            async function panda() {
              const { link } = await fetch('https://some-random-api.ml/img/panda').then(response => response.json());

              const pandaEmbed = {
                color: 0xe89e58,
                title: `panda boi`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: pandaEmbed });

            }

            panda();



  },
};