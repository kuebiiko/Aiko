const fetch = require('node-fetch');

module.exports = {
	name: 'koala',
    description: 'koaaaaaaaaaaallllllllllllaaaaaaaa',
    usage: 'l.koala',
	execute(message, args) {
            async function koala() {
              const { link } = await fetch('https://some-random-api.ml/img/koala').then(response => response.json())
              const koalaEmbed = {
                color: 0xe89e58,
                title: `k o a l a !`,
            
                image: {
                    url: link,
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            message.channel.send({ embed: koalaEmbed });

            }

            koala();



  },
};