const fetch = require('node-fetch');
const Discord = require('discord.js');

module.exports = {
    // Command data for the help command. 
	name: 'meme',
    description: 'Fetch a random meme from top reddit meme subs!',
    usage: 'l.meme',
	execute(message, args) {


        async function fetchMeme() {

            // Fetches the data we need for memeEmbed (this does not work like it should)
            
            const meme = await fetch('https://meme-api.herokuapp.com/gimme').then(response => response.json())
            

            const memeEmbed = {
                color: 0xe89e58,
                title: meme.title,
                url: meme.postLink,
            
                image: {
                    url: meme.url,
                },
                timestamp: new Date(),
                footer: {
                    text: 'r/' + meme.subreddit,
                },
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: memeEmbed });

            }

            // Executes Function. 
            fetchMeme();



  },
};