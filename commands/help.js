

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 5,
	execute(message, args) {



		if (!args.length) {
			const helpEmbed = {
                color: 0x53bed4,
                title: `Commands`,
                fields: [
                    {
                        name: 'Random Animals',
                        value: '`a.meow, a.koala, a.panda, a.redpanda, a.goat, a.doggo`',
                    },
                    {
                        name: 'Gif',
                        value: '`a.pat, a.hug, a.poke, a.wink`',
                    },
                    {
                        name: 'Fun',
                        value: '`a.dictionary, a.kanye, a.joke, a.darkjoke, a.programmingjoke, a.meme, a.trumpthonk`',
					},
					{
                        name: 'Utility',
						value: '`a.user, a.args, a.reload, a.avatar, a.server`',
					},
					{
                        name: 'Moderation',
                        value: '`a.prune, a.kick`',
                    },
                    {
                        name: 'Anime Search',
                        value: '`a.anime, a.character`',
                    },
                ],
                timestamp: new Date(),
            };
			message.channel.send({ embed: helpEmbed });
	}
}
};