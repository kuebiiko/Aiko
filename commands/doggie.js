const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
	name: 'doggo',
    description: 'get a random picture of a dog',
    usage: 'l.doggo',
	execute(message, args) {
            async function bork() {
              const { message } = await fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json());

	            message.channel.send(message);
            }

            bork();



  },
};