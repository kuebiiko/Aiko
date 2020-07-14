const fetch = require('node-fetch');
const Discord = require('discord.js');
const querystring = require('querystring');
const trim = (str, max) => ((str.length > max) ? `${str.slice(0, max - 3)}...` : str);


module.exports = {
	name: 'meow',
    description: 'cute cat :)',
    usage: 'l.meow',
	execute(message, args) {
            async function meow() {
              const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

              const meowEmbed = {
                color: 0xe89e58,
                title: `meow!`,
            
                image: {
                    url: file,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: meowEmbed });
	          
            }

            meow();



  },
};