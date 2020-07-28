require('node-fetch');



module.exports = {
	name: 'goat',
    description: 'goat goat goat',
    usage: 'a.goat',
	execute(message) {
            async function goat() {
              const goatEmbed = {
                color: 0x53bed4,
                title: `goat`,
            
                image: {
                    url: 'https://placegoat.com/200/200',
                },
                timestamp: new Date(),
            };
            
            // Sends 'animuHugEmbed' to the channel.
            await message.channel.send({embed: goatEmbed});
	          
            }

            goat();



  },
};