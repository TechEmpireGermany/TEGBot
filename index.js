const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const { swears }  = require('./swears.json');

// Mongo db hier definieren
const mongoose = require('mongoose')
const customschema = require('./schemas/custom-commands')
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();
const Commando = require('discord.js-commando')

// Dies ist der Code für die Mongo-DB-Verbindung
mongoose.connect('mongodb+srv://PatriotZest:techwayempire@techempiregermany.gp4jq.mongodb.net/Data',{
         useUnifiedTopology : true,
         useNewUrlParser : true,
}).then(console.log("Connected to mongo db"));


fs.readdirSync('./commands').forEach(dirs => {
    const commands = fs.readdirSync(`./commands/${dirs}`).filter(files => files.endsWith('.js'));

    for (const file of commands) {
        const command = require(`./commands/${dirs}/${file}`);
        console.log(`Loading command ${file}`);
        client.commands.set(command.name.toLowerCase(), command);
    };
});


// anti swear part
client.on('message', async message => {
	let yes = false;
   
    var i;
    for(i = 0;i < swears.length; i++) {
      if(message.content.toLowerCase().includes(swears[i].toLowerCase()))
        yes = true; 
    }
	if(yes){
		message.delete()
		let yesembed = new discord.MessageEmbed()
			.setTitle('Swear')
			.setThumbnail(message.author.displayAvatarURL())
			.addField('Swore by', message.author.tag)
			.addField('User ID', message.author.id)
			.addField('Message deleted', message.content)
			.setFooter('Time deleted', client.user.displayAvatarURL())
			.setTimestamp()
		let userembed = new discord.MessageEmbed()
			.setTitle('Swear')
			.setThumbnail(message.author.displayAvatarURL())
			.setDescription("TEG is a pg friendly server, you cannot swear here")
			.addField('Message deleted', message.content)
			.setFooter('Time deleted', client.user.displayAvatarURL())
			.setTimestamp()
		client.channels.cache.get(`835519322909573190`).send(yesembed)
		message.author.send(userembed)
	}
})







client.on('guildMemberAdd', member => {
	let channelID = '809372910233583626'
	let embed = new discord.MessageEmbed()
		.setTitle(`Member Joined`)
		.setDescription(`${member.user.tag} has joined TechEmpireGermany!`)
		.setThumbnail(member.user.displayAvatarURL())
		.setColor("GREEN")
		.setTimestamp()
		member.guild.channels.cache.get('809372910233583626').send(embed)
	let userembed = new discord.MessageEmbed()
		.setTitle(`Welcome to TechEmpireGermany!`)
		.setDescription(`Check out the rules channel and enjoy your stay! 😀`)
		.setColor("ORANGE")
		member.send(userembed);
})

client.on('guildMemberRemove', (member) => {
	let channelID = '809642061610745866'
	let embed = new discord.MessageEmbed()
		.setTitle(`Member Left`)
		.setDescription(`${member.user.tag} has left TechEmpireGermany`)
		.setThumbnail(member.user.displayAvatarURL())
		.setColor("RED")
		.setTimestamp()
		client.channels.cache.get('809642061610745866').send(embed)
})

const events = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
const player = fs.readdirSync('./player').filter(file => file.endsWith('.js'));

for (const file of events) {
    console.log(`Loading discord.js event ${file}`);
    const event = require(`./events/${file}`);
    client.on(file.split(".")[0], event.bind(null, client));
};

for (const file of player) {
    console.log(`Loading discord-player event ${file}`);
    const event = require(`./player/${file}`);
    client.player.on(file.split(".")[0], event.bind(null, client));
};

client.login(client.config.discord.token);