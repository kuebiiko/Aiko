const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
	name: 'doggo',
    description: 'get a random picture of a dog',
    usage: 'l.doggo',
	execute(message, args) {
            async function bork() {
              const { url } = await fetch('https://random.dog/woof.json').then(response => response.json());
              
              const animuHugEmbed = {
                color: 0xe89e58,
                title: `bork`,
            
                image: {
                    url: url,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: animuHugEmbed });

            }

            bork();



  },
};