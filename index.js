const fs = require('fs');
const discord = require('discord.js');

const client = new discord.Client({ disableMentions: 'everyone' });

const { Player } = require('discord-player');

const { swears }  = require('./swears.json');

const {everyone} = require(`./Everyone.json`)

const {dcinvites} = require(`./dcinvites.json`)



// Mongo db definiton
const mongoose = require('mongoose')
const customschema = require('./schemas/custom-commands')
client.player = new Player(client);
client.config = require('./config/bot');
client.emotes = client.config.emojis;
client.filters = client.config.filters;
client.commands = new discord.Collection();
const Commando = require('discord.js-commando');



// Mongo DB connection
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
	var filter1;
    for(filter1 = 0;filter1 < swears.length; filter1++) {
      if(message.content.toLowerCase().includes(swears[filter1].toLowerCase()))
        yes = true; 
	}
	if(yes){
		if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
		let roleID = "850684245927788554";
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get("850684245927788554");

	if(message.member.roles.cache.has(bypass.id)) return

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


//@everyone filter
client.on('message', async message => {
	let yes = false;
	var Filter2;
    for(Filter2 = 0;Filter2 < everyone.length; Filter2++) {
      if(message.content.toLowerCase().includes(everyone[Filter2].toLowerCase()))
        yes = true; 
    }
	if(yes){
		if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
		let roleID = "824063311829925898";
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get("824063311829925898");

	if(message.member.roles.cache.has(bypass.id)) return
		message.delete()
		let yesembed = new discord.MessageEmbed()
			.setTitle('Everyone-Ping')
			.setThumbnail(message.author.displayAvatarURL())
			.addField('by', message.author.tag)
			.addField('User ID', message.author.id)
			.addField('Message deleted', message.content)
			.setFooter('Time deleted', client.user.displayAvatarURL())
			.setTimestamp()
		let userembed = new discord.MessageEmbed()
			.setTitle('Everyone Ping')
			.setThumbnail(message.author.displayAvatarURL())
			.setDescription("please don't ping @Everyone if you need help go to a support channel and ping @support-team")
			.addField('Message deleted', message.content)
			.setFooter('Time deleted', client.user.displayAvatarURL())
			.setTimestamp()
		client.channels.cache.get(`835519322909573190`).send(yesembed)
		message.author.send(userembed)
	}
})
//auto response
client.on('message', (message) => {




	if (message.author.bot) return;
	
	if (message.content.includes("anyone able to help") ){
		if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")

		let roleID = "850684245927788554";
	
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get("850684245927788554");

	if(message.member.roles.cache.has(bypass.id)) return;

		message.channel.send(`${message.member}If you need help go in a support channel if you´re not already in one and state your issue , ping @Support Team`);


	}});


	client.on('message', (message) => {




		if (message.author.bot) return;
		
		if (message.content.includes("someone able to help?") ){
			if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
	
			let roleID = "850684245927788554";
		
		let membersWithRole = message.guild.roles.cache.get(roleID).members;
	
		let bypass = message.guild.roles.cache.get("850684245927788554");
	
		if(message.member.roles.cache.has(bypass.id)) return;
	
			message.channel.send(`${message.member}If you need help go in a support channel if you´re not already in one and state your issue , ping @Support Team`);
	
	
		}});


		client.on('message', (message) => {




			if (message.author.bot) return;
			
			if (message.content.includes("help me?") ){
				if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
		
				let roleID = "850684245927788554";
			
			let membersWithRole = message.guild.roles.cache.get(roleID).members;
		
			let bypass = message.guild.roles.cache.get("850684245927788554");
		
			if(message.member.roles.cache.has(bypass.id)) return;
		
				message.channel.send(`${message.member}If you need help go in a support channel if you´re not already in one and state your issue , ping @Support Team`);
		
		
			}});

client.on('message', (message) => {
	


	if (message.content.includes("issue")) {

		if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")


		let roleID = "850684245927788554";
		let membersWithRole = message.guild.roles.cache.get(roleID).members;
	
		let bypass = message.guild.roles.cache.get("850684245927788554");
	
		if(message.member.roles.cache.has(bypass.id)) return;
	
		if (message.author.bot) return;

		message.channel.send(`${message.member}If you need help go in a support channel if you´re not already in one and state your issue ,  ping @Support Team`);
		}})
	
	
	client.on('message', (message) => {
	

if (message.content.includes("Hey")) {



	message.channel.send(`what's up?`)



}


if (message.content.includes("reinstall Windows")) {

	if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")

if(message.author.bot) return;

	message.channel.send("This tutorial will lead you how to do a fresh windows installation:  (All your data will be gone,  back it up and use `!key` in case you need to back up your Product Key too, please save it somewhere safe and don't show us or anyone the key!)");
       message.channel.send("https://youtu.be/bwJ_E-I9WRs");
       message.channel.send("To figure out which key you need to use to boot to a usb, run the command `!bootkey`.");

}



		if (message.content.includes("virus")) {

			if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
	
	
			let roleID = "850684245927788554";
			let membersWithRole = message.guild.roles.cache.get(roleID).members;
		
			let bypass = message.guild.roles.cache.get("850684245927788554");
		
			if(message.member.roles.cache.has(bypass.id)) return;
		
			if (message.author.bot) return;
	
			message.channel.send("we suggest you to check for viruses and suspicious processes with: https://www.malwarebytes.com/mwb-download/thankyou/");
	
		
		
		
		
		
		}})

//Discord.gg filter
client.on('message', async message => {
	let yes = false;
   
    var filter3;
    for(filter3 = 0;filter3 < dcinvites.length; filter3++) {
      if(message.content.toLowerCase().includes(dcinvites[filter3].toLowerCase()))
        yes = true; 
    }
	if(yes){
		if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
		let roleID = "850684245927788554";
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get("850684245927788554");

	if(message.member.roles.cache.has(bypass.id)) return

	
		message.delete()
		let yesembed = new discord.MessageEmbed()
			.setTitle('Self-promo')
			.setThumbnail(message.author.displayAvatarURL())
			.addField('by', message.author.tag)
			.addField('User ID', message.author.id)
			.addField('Message deleted', message.content)
			.setFooter('Time deleted', client.user.displayAvatarURL())
			.setTimestamp()
		let userembed = new discord.MessageEmbed()
			.setTitle('Self-Promo')
			.setThumbnail(message.author.displayAvatarURL())
			.setDescription("Self-Promo isn't allowed on TEG!")
			.addField('Message deleted', message.content)
			.setFooter('Time deleted', client.user.displayAvatarURL())
			.setTimestamp()
		client.channels.cache.get(`835519322909573190`).send(yesembed)
		message.author.send(userembed)
	}
})

//DM log
client.on('message', async (message) => {

	const dmmessage = message.channel.type === `dm`

	if (dmmessage)  {

		let channelID = '853984661360869386'
		let logdest = new discord.MessageEmbed()
			.setTitle(`DM`)
			.setDescription(`by:  ${message.author}`  )
			.addField(` **Content:**`, message.content)
			.addField(`User ID:`, message.author.id)
			.setColor("RED")
			.setTimestamp()
			client.channels.cache.get(channelID).send(logdest)

	}})







client.on('messageDelete', async message => {
	if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
	let channelID = '825774127661973545'
	let logdest = new discord.MessageEmbed()
		.setTitle(`Message deleted`)
		.setDescription(` message deleted send by ${message.member} in ${message.channel} **Content:** ${message.content}`)
		.setColor("RED")
		.setTimestamp()
	message.guild.channels.cache.get(channelID).send(logdest)


})

client.on('guildBanAdd',  async (guild,user) =>  {
	const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_ADD',
	});
	
	
	const banLog = fetchedLogs.entries.first();
	
	
	if (!banLog) return console.log(`${user.tag} was banned from ${guild.name} but no audit log could be found.`);

	
	
	
	const { executor, target } = banLog;
	
	if (target.id === user.id) {
		let channelID = '825788452103913522'
	let logdest = new discord.MessageEmbed()
		.setTitle(`Banned`)
		.setDescription(` User banned: ${user.tag} banned by: ${executor.tag}`)
		.setColor("RED")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)

		
		
	} else {
		let channelID = '825788452103913522'
	let logdest = new discord.MessageEmbed()
		.setTitle(`Banned`)
		.setDescription(` User banned: ${user.tag} couldn't detect who banned them`)
		.setColor("RED")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)
	}
});

client.on('messageUpdate', (message,oldMessage, newMessage) => { 
	if (message.channel.type === 'dm') return message.channel.send("**Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you**")
	if (newMessage ===  oldMessage ) return;
	if (!oldMessage.author) return;
	const MessageLog = client.channels.cache.find(channel => channel.id ==='825774068313358346');
const embed = new discord.MessageEmbed()
.setTitle(`Message updated`) 
.setAuthor(newMessage.author.tag)
.addField(`Original:`, oldMessage)
 .addField(`Edit:`, newMessage)
 .setTimestamp()
 .setColor('BLUE')
 MessageLog.send(embed);
 

});
client.on('guildMemberUpdate', (oldMember, newMember) => {
	
	if (!oldMember.nickname && newMember.nickname) {
		if (newMember.nickname === oldMember.nickname) return;
	  const membernewnicklog = new discord.MessageEmbed()
		.setAuthor(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL({ format: "png", dynamic: true })}`)
		.setDescription(`**${newMember} nickname added**`)
		.setFooter(`${newMember.user.username}'s ID: ${newMember.id}`)
		.setTimestamp()
		.setColor('BLUE')
		.addField(`New nickname`, newMember.nickname)
	  client.channels.cache.get('825774068313358346').send(membernewnicklog);
	  return;
	}
	if (oldMember.nickname && !newMember.nickname) {
		if (newMember.nickname === oldMember.nickname) return;
	  const memberremovenicklog = new discord.MessageEmbed()
		.setAuthor(`${oldMember.user.tag}`, `${oldMember.user.displayAvatarURL({ format: "png", dynamic: true })}`)
		.setDescription(`**${oldMember} nickname reseted**`)
		.setFooter(`${oldMember.user.username}'s ID: ${oldMember.id}`)
		.setTimestamp()
		.setColor('BLUE')
		.addField(`Old nickname`, oldMember.nickname)
	  client.channels.cache.get('825774068313358346').send(memberremovenicklog);
	  return;
	}
	if (oldMember.nickname && newMember.nickname) {
		if (newMember.nickname === oldMember.nickname) return;
	  const memberchangednicklog = new discord.MessageEmbed()
		.setAuthor(`${newMember.user.tag}`, `${newMember.user.displayAvatarURL({ format: "png", dynamic: true })}`)
		.setDescription(`**${newMember} nickname changed**`)
		.setFooter(`${newMember.user.username}'s ID: ${newMember.id}`)
		.setTimestamp()
		.setColor('BLUE')
		.addField(`Before`, oldMember.nickname)
		.addField(`After`, newMember.nickname);
	  client.channels.cache.get('825774068313358346').send(memberchangednicklog);
	  return;
	}
  });

  client.on("guildMemberUpdate", (oldMember, newMember) => {
    
    if (oldMember.roles.cache.size > newMember.roles.cache.size) {
        
       
        
       
        oldMember.roles.cache.forEach(role => {
            if (!newMember.roles.cache.has(role.id)) {
				const Embedroles1 = new discord.MessageEmbed();
				Embedroles1.setColor(`RED`);
				Embedroles1.setAuthor(newMember.user.tag, newMember.user.avatarURL());
                Embedroles1.addField(`Role Removed`, role);
           
				client.channels.cache.get("825785679220703243").send(Embedroles1)
			
			}

			;
        });

       
    } else if (oldMember.roles.cache.size < newMember.roles.cache.size) {
        
        
       
        newMember.roles.cache.forEach(role => {
            if (!oldMember.roles.cache.has(role.id)) {
				const Embedroles2 = new discord.MessageEmbed();
        Embedroles2.setColor(`GREEN`);
        Embedroles2.setAuthor(newMember.user.tag, newMember.user.avatarURL());
                Embedroles2.addField(`Role Added`, role);
           
				client.channels.cache.get("825785679220703243").send(Embedroles2);
			
			}
        });
        
    }
});


		


	



client.on('guildBanRemove',  async (guild,user) =>  {
	const fetchedLogs = await guild.fetchAuditLogs({
		limit: 1,
		type: 'MEMBER_BAN_REMOVE',
	});
	
	
	const banLog = fetchedLogs.entries.first();
	
	
	if (!banLog) return console.log(`${user.tag} was unbanned from ${guild.name} but no audit log could be found.`);

	
	
	
	const { executor, target } = banLog;
	
	if (target.id === user.id) {
		let channelID = '825788500179812363'
	let logdest = new discord.MessageEmbed()
		.setTitle(`Unbanned`)
		.setDescription(` User Unbanned: ${user.tag} Unbanned by: ${executor.tag}`)
		.setColor("RED")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)

		
		
	} else {
		let channelID = '825788500179812363'
	let logdest = new discord.MessageEmbed()
		.setTitle(`Unbanned`)
		.setDescription(` User Unbanned: ${user.tag} couldn't detect who Unbanned them`)
		.setColor("RED")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)
	}
});







//welcome and left notifications
client.on('guildMemberAdd', member => {
	let channelID = '824060103119470622'
	let embed = new discord.MessageEmbed()
		.setTitle(`Member Joined`)
		.setDescription(`${member.user.tag} has joined TechEmpireGermany!`)
		.setThumbnail(member.user.displayAvatarURL())
		.setColor("GREEN")
		.setTimestamp()
		member.guild.channels.cache.get('824060103119470622').send(embed)
	let userembed = new discord.MessageEmbed()
		.setTitle(`Welcome to TechEmpireGermany!`)
		.setDescription(`Check out the rules channel and enjoy your stay! 😀`)
		.setColor("ORANGE")
		member.send(userembed);
		let channelID2 = '824319260540010557'
	let embed2 = new discord.MessageEmbed()
		.setTitle(`Member Joined`)
		.setDescription(`${member.user.tag} has joined TechEmpireGermany!`)
		.setColor("GREEN")
		.setTimestamp()
		member.guild.channels.cache.get('824319260540010557').send(embed2)
})


client.on('guildMemberRemove', (member) => {
	let channelID = '824321468279947275'
	let embed = new discord.MessageEmbed()
		.setTitle(`Member Left`)
		.setDescription(`${member.user.tag} has left TechEmpireGermany`)
		.setThumbnail(member.user.displayAvatarURL())
		.setColor("RED")
		.setTimestamp()
		client.channels.cache.get('824321468279947275').send(embed)
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
