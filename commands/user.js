module.exports = {
	name: 'user',
    description: 'tells ya a wee bit about yerself and others',
    alaises: ['people','person'],
	execute(message, args) {
		if (!message.mentions.users.size) {
            return message.channel.send(`You are ${message.author.username}! Your handy dandy identification number is ${message.author.id}.`) 
        }
        const taggedUser = message.mentions.users.first()
    
        message.channel.send(`They are ${taggedUser.username}! Their handy dandy identification number is ${taggedUser.id}.`)
	},
};