module.exports = {
	name: 'server',
    description: 'tells ya a wee bit about ye server',
    aliases: ['guild'],
	execute(message) {
        message.channel.send(`This server is called ${message.guild.name}.\nIt was created on ${message.guild.createdAt}, and currently has ${message.guild.memberCount} members!`);
	},
};