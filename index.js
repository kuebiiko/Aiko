
const fs = require('fs');
const Discord = require('discord.js');
new Discord.Collection();
const { prefix, token } = require('./config.json');
const mongoose = require('mongoose');

const client = new Discord.Client();
client.commands = new Discord.Collection();

mongoose.connect("mongodb+srv://kuebiiko:kuebiikoDB@aiko.lfzpo.mongodb.net/data", {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

const cooldowns = new Discord.Collection();

const music_list = [
    "Lucky☆Orb || a.help", 
    "1HOPE SNIPER || a.help",
    "Celebration (Movie Edit) [feat. Toko Miura] || a.help", 
	"Rolling Girl || a.help",
	"Stardust Interlude || a.help",
	"Fragment Of Stars || a.help",
	"Inferno || a.help",
	"WANNABE || a.help",
	"Monster || a.help",
	"Blueming || a.help",
	"As if It\'s Your Last || a.help",
	"How You Like That || a.help",
	"Into The I-Land || a.help",
	"Feel Special || a.help",
	"PIRI || a.help",
	"Chiisanahibi || a.help",
	"Sour Candy || a.help",
	"Fireworks Festival || a.help",
	"Imakoko || a.help",
	"Itomori High School || a.help",
	"First View Of Tokyo || a.help",
	"Evoking Memories || a.help",
	"The night inn || a.help",
	"Again to Goshintai || a.help",
	"Theme of Mitsuha || a.help",
	"Unseen two || a.help",
	"Kuchikamizake trip || a.help",
	"dreamin chuchu || a.help",
	"Roki || a.help",
	"Ghost Rule || a.help",
	"Labyrinth || a.help",
	"FIESTA || a.help",
	"Psycho || a.help",
	"Oh my god || a.help",
	"Filter || a.help",
	"Magic Shop || a.help",
	"Best of Me || a.help",
	"dimple || a.help",
	"Spring Day || a.help",
	"Outro: Wings || a.help",
	"I Need U || a.help",
	"Butterfly || a.help",
	"Jelly || a.help",
	"ICY || a.help",
	"MORE & MORE || a.help",
	"Gashina || a.help",
	"Daechwita || a.help",
	"eight(Prod.&Feat SUGA of BTS) || a.help",
	"comethru || a.help",
	"oh, mexico || a.help",
	"desire || a.help",
	"On The Moon || a.help",
	"Falling Leaves are Beautiful || a.help",
	"The Truth Untold || a.help",
	"21:29 || a.help",
	"instagram || a.help",
	"Shiny Ray || a.help",
	"mononoke in the fiction || a.help",
	"forget-me-not || a.help",
	"Touch off || a.help",
	"Zenzenzense || a.help"
    ];

client.once('ready', async () => {

	console.log(`Logged in as ${client.user.tag}!`);
	setInterval(() => {
        const song = Math.floor(Math.random() * (music_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(music_list[song], { type: 'LISTENING'}); // sets bot's activities to one of the phrases in the arraylist.
    }, 100000); // Runs this every 10 seconds.
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLowerCase();

	const command = client.commands.get(commandName)
		|| client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

	if (!command) return;

	if (command.guildOnly && message.channel.type !== 'text') {
		return message.reply('I can\'t execute that command inside DMs!');
	}

	if (command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}!`;

		if (command.usage) {
			reply += `\nThe proper usage would be: \`${prefix}${command.name} ${command.usage}\``;
		}

		return message.channel.send(reply);
	}

	if (!cooldowns.has(command.name)) {
		cooldowns.set(command.name, new Discord.Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.name);
	const cooldownAmount = (command.cooldown || 3) * 1000;

	if (timestamps.has(message.author.id)) {
		const expirationTime = timestamps.get(message.author.id) + cooldownAmount;

		if (now < expirationTime) {
			const timeLeft = (expirationTime - now) / 1000;
			return message.reply(`please wait ${timeLeft.toFixed(1)} more second(s) before reusing the \`${command.name}\` command.`);
		}
	}

	timestamps.set(message.author.id, now);
	setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);

	try {
		command.execute(message);
	} catch (error) {
		console.error(error);
		await message.reply('there was an error trying to execute that command!');
		await message.channel.send(error);
	}
});

client.login(token);

