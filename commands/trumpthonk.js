const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    // Command data for the help command. 
	name: 'trumpthonk',
    description: 'Get a random trump quote.',
    usage: 'l.trumpthonk',
	execute(message, args) {

        async function trumpThonk() {

            // Fetches the data we need for memeEmbed (this does not work like it should)
            
            const thonk = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then(response => response.json())
            

            const thonkEmbed = {
                color: 0xe89e58,
                title: 'Trump thonks...',
                description: thonk.message,
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: thonkEmbed });

            }

            // Executes Function. 
            trumpThonk();   

  },
};