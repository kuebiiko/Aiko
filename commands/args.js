module.exports = {
	name: 'args',
    description: 'argument testing',
    args: true,
    alaises: ['arguments'],
	execute(message, args) {
	    if (args[0] === 'bruh') {
            return message.channel.send('bruh indeed <:GWaobloChildPepeSweat:407618812217917451>');
        }
    
        message.channel.send(`args: ${args}`);
	},
};