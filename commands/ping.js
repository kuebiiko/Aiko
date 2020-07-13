module.exports = {
	name: 'ping',
    description: 'Ping!',
    cooldown: 5,
    execute(message, args) {
        message.channel.send('ping ping PONG!\nhttps://tenor.com/KWO8.gif');
    }
};

