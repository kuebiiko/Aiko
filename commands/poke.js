const gif = ["https://cdn.weeb.sh/images/rktSlkKvb.gif", "https://cdn.weeb.sh/images/Sk_rl1Kw-.gif", "https://cdn.weeb.sh/images/r1v6xoh0Z.gif", "https://cdn.weeb.sh/images/B1oSgytwW.gif"];

module.exports = {
	name: 'poke',
    description: 'pokie poke',
    usage: ' ',
	execute(message) {
            async function gifSend() {
              const randomGif = gif[Math.floor(Math.random() * gif.length)];
              const taggedUser = message.mentions.users.first()
              const animuEmbed = {
                color: 0x53bed4,
                title: `${message.author.username} pokes ${taggedUser.username}...`,
            
                image: {
                    url: randomGif,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: animuEmbed});

            }

            gifSend();



  },
};