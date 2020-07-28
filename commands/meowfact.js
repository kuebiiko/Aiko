const fetch = require('node-fetch');

module.exports = {
	name: 'meowfact',
    description: 'cat fact c:',
    usage: 'l.meowfact',
	execute(message) {
            async function fetchFact() {

            const { text } = await fetch('https://cat-fact.herokuapp.com/facts/random').then(response => response.json());

            await message.channel.send(text);
            
            const meowFactEmbed = {
              color: 0x53bed4,
              title: `Here's a random cat fact!`,
              description: text,
              
              timestamp: new Date(),
          };
          
          // Sends 'animuHugEmbed' to the channel.
          await message.channel.send({embed: meowFactEmbed});

            }

            fetchFact();
  },
};