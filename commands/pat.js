const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    // Command data for the help command. 
	name: 'pat',
    description: 'pat pat pat',
    usage: 'l.hug @user',
	execute(message, args) {


        async function animuHug() {

            // Checks for if there is a mentioned user. 
            if (!message.mentions.users.size) {

                const { link } = await fetch('https://some-random-api.ml/animu/pat').then(response => response.json());

            // Creates a Discord message embed named 'animuHugEmbed' with the link to the hug gif from earlier.

                const animuHugEmbed1 = {
                    color: 0xe89e58,
                    title: `Pat pat pat.`,
            
                    image: {
                        url: link,
                    },
                    timestamp: new Date(),
                };
            
                    // Sends 'animuHugEmbed' to the channel.
                    message.channel.send({ embed: animuHugEmbed1 });

            }

            // Sets the mentioned user to a variable called 'taggedUser' for convenience.
            const taggedUser = message.mentions.users.first();
            
            // Fetches the hug gif.
            const { link } = await fetch('https://some-random-api.ml/animu/pat').then(response => response.json());

            // Creates a Discord message embed named 'animuHugEmbed' with the link to the hug gif from earlier.

            const animuHugEmbed = {
                color: 0xe89e58,
                title: `**${message.author.username}** pats **${taggedUser.username}**!`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: animuHugEmbed });

            }

            // Executes Function. 
            animuHug();



  },
};
