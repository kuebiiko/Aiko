const fetch = require('node-fetch');

module.exports = {
	name: 'koala',
    description: 'koaaaaaaaaaaallllllllllllaaaaaaaa',
    usage: 'l.koala',
	execute(message) {
            async function koala() {
              const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json())
              const koalaEmbed = {
                color: 0x53bed4,
                title: `k o a l a !`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: koalaEmbed});

            }

            koala();



  },
};