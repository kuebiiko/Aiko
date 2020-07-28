module.exports = {
	name: 'args',
    description: 'argument testing',
    args: true,
    alaises: ['arguments'],
	execute(message, args) {
        if (args[0] === 'udemy') {
                message.channel.send('trapping straight guys is easier than you think \nyou should take this onine udemy course from udemy \nit has all the lessons to teach you how to become a convincing trap \nand it\'s taught by an expert instructor \nwho looks just like a loli \nand has a ***GIANT DICK TOO***')
        } else {
            message.channel.send(`${args}`);
        }
        
	},
};