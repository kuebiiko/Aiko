const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
	name: 'meow',
    description: 'cute cat :)',
    usage: 'l.meow',
	execute(message, args) {
            async function meow() {
              const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json());

	            message.channel.send(file);
            }

            meow();



  },
};