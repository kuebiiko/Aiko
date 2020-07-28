const fetch = require('node-fetch');
require('discord.js');

module.exports = {
    // Command data for the help command. 
	name: 'wink',
    description: 'pat pat pat',
    usage: 'l.hug @user',
	execute(message) {


        async function animuHug() {

            // Checks for if there is a mentioned user. 
            if (!message.mentions.users.size) {

                const { link } = await fetch('https://some-random-api.ml/animu/wink').then(response => response.json());

            // Creates a Discord message embed named 'animuHugEmbed' with the link to the hug gif from earlier.
            message.mentions.users.first();

                const animuHugEmbed1 = {
                    color: 0x53bed4,
                    title: `${message.author.username} winks!`,
            
                    image: {
                        url: link,
                    },
                    timestamp: new Date(),
                };
            
                    // Sends 'animuHugEmbed' to the channel.
                    await message.channel.send({embed: animuHugEmbed1});

            }

            // Sets the mentioned user to a variable called 'taggedUser' for convenience.
            const taggedUser = message.mentions.users.first();
            
            // Fetches the hug gif.
            const { link } = await fetch('https://some-random-api.ml/animu/wink').then(response => response.json());

            // Creates a Discord message embed named 'animuHugEmbed' with the link to the hug gif from earlier.

            const animuHugEmbed = {
                color: 0xe89e58,
                title: `**${message.author.username}** winks at **${taggedUser.username}**!`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: animuHugEmbed});

            }

            // Executes Function. 
            animuHug();



  },
};
