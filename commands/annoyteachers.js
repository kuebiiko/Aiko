module.exports = {
	name: 'annoyteachers',
    description: 'how to annoy your teacher, taken from uncyclopedia!',
    alaises: ['annoyingteachers, teacher'],
    usage: 'l.annoyteachers',
	execute(message) {
        const embed = new Discord.MessageEmbed()
            .setTitle('How to Annoy your Teacher')
            .setDescription('Number 1: Speak gibberish or other languages when called on. In fact, just try to talk a lot in general. Speaking in a way they can\'t understand would do one of a few things; either their head would asplode, they\'d scream their head off at you for being a distraction, or they\'d pretend that they never called on you and instead call on one of the strategically placed sheep in the class.')
            .setColor('#53bed4')
            .setTimestamp()
            .setFooter(`See it in full at https://en.uncyclopedia.co/wiki/HowTo:Annoy_your_Teacher`);
        message.channel.send(embed);


  },
};