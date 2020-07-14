const fetch = require('node-fetch');

module.exports = {
	name: 'meowfact',
    description: 'cat fact c:',
    usage: 'l.meowfact',
	execute(message, args) {
            async function fetchFact() {

            const { text } = await fetch('https://cat-fact.herokuapp.com/facts/random').then(response => response.json());

            message.channel.send(text);
            
            const meowFactEmbed = {
              color: 0xe89e58,
              title: `Here's a random cat fact!`,
              description: text,
              
              timestamp: new Date(),
          };
          
          // Sends 'animuHugEmbed' to the channel.
          message.channel.send({ embed: meowFactEmbed });

            }

            fetchFact();
  },
};