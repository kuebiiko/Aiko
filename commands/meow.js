const fetch = require('node-fetch');



module.exports = {
	name: 'meow',
    description: 'cute cat :)',
    usage: 'l.meow',
	execute(message) {
            async function meow() {
              const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

              const meowEmbed = {
                color: 0x53bed4,
                title: `meow!`,
            
                image: {
                    url: file,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: meowEmbed});
	          
            }

            meow();



  },
};