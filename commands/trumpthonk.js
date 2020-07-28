const fetch = require('node-fetch');

module.exports = {
    // Command data for the help command. 
	name: 'trumpthonk',
    description: 'Get a random trump quote.',
    usage: 'l.trumpthonk',
	execute(message) {

        async function trumpThonk() {

            // Fetches the data we need for memeEmbed (this does not work like it should)
            
            const thonk = await fetch('https://api.whatdoestrumpthink.com/api/v1/quotes/random').then(response => response.json())
            

            const thonkEmbed = {
                color: 0x53bed4,
                title: 'Trump thonks...',
                description: thonk.message,
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: thonkEmbed});

            }

            // Executes Function. 
            trumpThonk();   

  },
};