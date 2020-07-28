const fetch = require('node-fetch');

module.exports = {
    // Command data for the help command. 
	name: 'hug',
    description: 'hug a friend!',
    usage: 'l.hug @user',
	execute(message) {


        async function animuHug() {

            // Checks for if there is a mentioned user. 
            if (!message.mentions.users.size) {
                return message.reply('you can\'t hug the air, baka.');
            }

            // Sets the mentioned user to a variable called 'taggedUser' for convenience.
            const taggedUser = message.mentions.users.first();
            
            // Fetches the hug gif.
            const { link } = await fetch('https://some-random-api.ml/animu/hug').then(response => response.json());

            // Creates a Discord message embed named 'animuHugEmbed' with the link to the hug gif from earlier.

            const animuHugEmbed = {
                color: 0x53bed4,
                title: `**${message.author.username}** hugs **${taggedUser.username}**!`,
            
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


