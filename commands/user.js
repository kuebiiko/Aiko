module.exports = {
	name: 'user',
    description: 'tells ya a wee bit about yerself and others',
    alaises: ['people','person'],
	execute(message) {
		if (!message.mentions.users.size) {
            return message.channel.send(`You are ${message.author.username}! Your handy dandy identification number is ${message.author.id}.`) 
        }
        const taggedUser = message.mentions.users.first()

        if (taggedUser.id === 712543265517338625) {
            message.channel.send('Hi! I\'m Aiko, a Discord bot developed by kuebiiko#6152. I hope I can be of help to you.')
        }
    
        message.channel.send(`They are ${taggedUser.username}! Their handy dandy identification number is ${taggedUser.id}.`)
	},
};