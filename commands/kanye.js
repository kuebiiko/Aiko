const fetch = require('node-fetch');

module.exports = {
    // Command data for the help command. 
	name: 'kanye',
    description: 'Get a random kanye quote.',
    usage: 'l.kanye',
	execute(message) {

        async function kanyeThonk() {

            // Fetches the data we need for memeEmbed (this does not work like it should)
            
            const { quote } = await fetch('https://api.kanye.rest/').then(response => response.json())
            

            const kanyeEmbed = {
                color: 0x53bed4,
                title: 'Kanye thinks...',
                description: quote,
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: kanyeEmbed});

            }

            // Executes Function. 
        
            kanyeThonk();   

  },
};