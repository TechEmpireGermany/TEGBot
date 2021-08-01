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
mongoose.connect('Database',{
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

//activity points system



client.on("message", async (message) => {
	if(message.channel.type === `dm`) return ;
	if (!message.guild) return;
	if (message.author.bot) return; 


	const Levels = require("discord.js-leveling");
	
	let ownerid = "824063311829925898";
	let roleID = "850684245927788554";
	let membersWithRole = message.guild.roles.cache.get(roleID,ownerid).members;

	let staff = message.guild.roles.cache.get("850684245927788554");


	const ticketcreate = message.channel.id === '824684376398233670'
	const suggestions = message.channel.id === '824926277868978186'
	const general = message.channel.id === '824042976371277888'
	const games = message.channel.id === '824059985998381138'
	const setups = message.channel.id === '824737989850169355'
	const memes = message.channel.id === '824738477291601980'
	const music = message.channel.id === '824067063941300224'
	const funbots = message.channel.id === '832535838289297408'
	const supportteam = message.channel.id === '824065058388181013'
	const bump = message.channel.id === '824185956549787659'







	if(message.member.roles.cache.has(staff.id))  {

if(ticketcreate) return
if(suggestions) return
if(general) return
if(games) return
if(setups) return
if(memes) return
if(music) return
if(funbots) return
if(supportteam) return
if(bump) return

		
		
	
		let owners = message.guild.roles.cache.get("824063311829925898");

		if (message.member.roles.cache.has(owners.id)) return

		

		

		const randomAmountOfXp = Math.floor(Math.random() * 10) + 1; 

	

  
   
  
   
   const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  
   if(hasLeveledUp) {

	



	  
		  const user = await Levels.fetch(message.author.id, message.guild.id);

		 
		  
		  console.log(`Activity  Point given: ${message.author.tag}`)


		  let channelID = '824194262279127060'
	let logdest = new discord.MessageEmbed()
		.setTitle(`Activity Point given`)
		.setDescription(` ${message.author.tag} Got a new Activity Point!`)
		.setColor("BLUE")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)

	

   }}})
	
	  
  


// anti swear part
client.on('message', async message => {

const spteamstaffchannel = message.channel.id === `824065058388181013`
const modtalk = message.channel.id === `824057837491453982`
const botdevelopment = message.channel.id === `824216769442218004`
const botcommands = message.channel.id === `824326748426469396`
const Ownerarea = message.channel.id ===`824066908097740910`






	let yes = false;   
	var filter1;
    for(filter1 = 0;filter1 < swears.length; filter1++) {
      if(message.content.toLowerCase().includes(swears[filter1].toLowerCase()))
        yes = true; 
	}
	if(yes){
		const dmreplyembed = new discord.MessageEmbed()
		.setTitle('Automatically DM reply')
		.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
		.setFooter('we can see every DM you send to the Bot')
		.setColor('BLUE')
		if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)
		
if (spteamstaffchannel) return
if (modtalk) return
if (botdevelopment) return
if (botcommands) return
if (Ownerarea) return




	

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
	
	const spteamstaffchannel = message.channel.id === `824065058388181013`
const modtalk = message.channel.id === `824057837491453982`
const botdevelopment = message.channel.id === `824216769442218004`
const botcommands = message.channel.id === `824326748426469396`
const Ownerarea = message.channel.id ===`824066908097740910`
	

	
	

	
	let yes = false;
	var Filter2;
    for(Filter2 = 0;Filter2 < everyone.length; Filter2++) {
      if(message.content.toLowerCase().includes(everyone[Filter2].toLowerCase()))
        yes = true; 
    }
	if(yes){
		const dmreplyembed = new discord.MessageEmbed()
.setTitle('Automatic DM reply')
.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
.setFooter('we can see every DM you send to the Bot')
.setColor('BLUE')
if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)
		let ownerid = "824063311829925898";
	let membersWithRole = message.guild.roles.cache.get(ownerid).members;

		let owners = message.guild.roles.cache.get('824063311829925898')
if (message.member.roles.cache.has(owners.id)) return
if (spteamstaffchannel) return
if (modtalk) return
if (botdevelopment) return
if (botcommands) return
if (Ownerarea) return
		

		
		
		
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


		let generalsupport = message.channel.id === `824059680905101333`
let gamingsupport = message.channel.id === `824059755935957023`
let softwaresupport = message.channel.id === `824059831513907200`
let hardwaresupport = message.channel.id === `824059920826499093`
let vcchat = message.channel.id === `824061207924965416`


	
if (message.content.includes("issue","is anybody able to help me?", "can  i get some help?", "i need help", "anyone able to help")) {

	







	const dmreplyembed = new discord.MessageEmbed()
	.setTitle('Automatic DM reply')
	.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
	.setFooter('we can see every DM you send to the Bot')
	.setColor('BLUE')
	if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)

	


	let roleID = "850684245927788554";
			let membersWithRole = message.guild.roles.cache.get(roleID).members;
		
			let bypass = message.guild.roles.cache.get("850684245927788554");
		
			if(message.member.roles.cache.has(bypass.id)) return






if(generalsupport) return
if(gamingsupport) return
if(softwaresupport) return
if(hardwaresupport) return
if(vcchat) return


	if(message.author.bot) return 



	message.channel.send(`${message.member} please go in a support channel , state your issue and Ping @Support team`)



}


if (message.content.includes("reinstall Windows")) {

	const dmreplyembed = new discord.MessageEmbed()
	.setTitle('Automatic DM reply')
	.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
	.setFooter('we can see every DM you send to the Bot')
	.setColor('BLUE')
	if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)

if(message.author.bot) return;

	message.channel.send("This tutorial will lead you how to do a fresh windows installation:  (All your data will be gone,  back it up and use `!key` in case you need to back up your Product Key too, please save it somewhere safe and don't show us or anyone the key!)");
       message.channel.send("https://youtu.be/bwJ_E-I9WRs");
       message.channel.send("To figure out which key you need to use to boot to a usb, run the command `!bootkey`.");

}



		if (message.content.includes("virus")) {

			const dmreplyembed = new discord.MessageEmbed()
		.setTitle('Automatic DM reply')
		.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
		.setFooter('we can see every DM you send to the Bot')
		.setColor('BLUE')
		if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)
	
	
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
		

		const dmreplyembed = new discord.MessageEmbed()
		.setTitle('Automatic DM reply')
		.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
		.setFooter('we can see every DM you send to the Bot')
		.setColor('BLUE')
		if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)



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
if (message.author.bot) return;
if (!message.content) message.content = `couldn't detect, probably a image or unknown Emoji`
if(!message.author) message.author = `not able to detect`
if(!message.author.id) message.author.id = `couldn't detect the ID of the User`



		let channelID = `853984661360869386`
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

	
	const dmreplyembed = new discord.MessageEmbed()
		.setTitle('Automatic DM reply')
		.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
		.setFooter('we can see every DM you send to the Bot')
		.setColor('BLUE')
		if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)
	
	
	
	
	let roleID = "850684245927788554";
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get("850684245927788554");

	if(message.member.roles.cache.has(bypass.id)) return


	
	if(!message.member) message.member = `not detected`
	if(!message.channel) message.channel = `not detected`
	if(!message.content) message.content = `not detected`


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





client.on('messageUpdate', async (oldMessage,newMessage) => { 
	const dmreplyembed = new discord.MessageEmbed()
	.setTitle('Automatic DM reply')
	.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
	.setFooter('we can see every DM you send to the Bot')
	.setColor('BLUE')
	if (oldMessage.channel.type === 'dm') return message.channel.send(dmreplyembed)


	if(oldMessage.author.bot) return;
	if(!oldMessage) oldMessage = `not detected`
	if(!newMessage) newMessage = `not detected`
	if(!oldMessage.author.tag) oldMessage.author.tag = `couldn't detect`


	let roleID = "850684245927788554";
	let membersWithRole = oldMessage.guild.roles.cache.get(roleID).members;

	let bypass = oldMessage.guild.roles.cache.get("850684245927788554");

	if(oldMessage.member.roles.cache.has(bypass.id)) return


	
	const MessageLog = client.channels.cache.find(channel => channel.id ==='825774068313358346');
const embed = new discord.MessageEmbed()
.setTitle(`Message updated`) 
.setAuthor(oldMessage.author.tag)
 .addField(`Original:`, oldMessage)
 .addField(`Edit:` , newMessage)
 .setTimestamp()
 .setColor('BLUE')
 MessageLog.send(embed);
})


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
	  client.channels.cache.get('825773983000690698').send(membernewnicklog);
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
	  client.channels.cache.get('825773983000690698').send(memberremovenicklog);
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
	  client.channels.cache.get('825773983000690698').send(memberchangednicklog);
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

//Bump Reminder
client.on('message', async message => {
    if ( message.embeds.length && message.author.username == "DISBOARD" && message.embeds[ 0 ].description.indexOf(":thumbsup:") > -1
    ) {
		message.channel.send(`thank you for bumping the Server!`)
        setTimeout(() => {
            message.channel.send("Time to bump the server!\n<@&825049916413444196> could anybody please run `!d bump`?")
        }, 7200000);
    }
});

client.on('message', async message => {
    if (message.content === "set bump") 
     {
		 message.channel.send("**bump set bump reminder reacts in the next 2 hours**")
        setTimeout(() => {
            message.channel.send("Time to bump the server!\n<@&825049916413444196> could anybody please run `!d bump`?")
        }, 7200000);
    }
});


//invite logs
const invites = {};
const wait = require('util').promisify(setTimeout);
client.on('ready', async () => {
	await wait(3500);

	client.guilds.cache.forEach(g => {
		g.fetchInvites().then(guildInvites => {
		  invites[g.id] = guildInvites;
		});
	  });
	


//welcome and left notifications
client.on('guildMemberAdd', (member) => {

	member.guild.fetchInvites().then(guildInvites => {

		const ei = invites[member.guild.id];

		invites[member.guild.id] = guildInvites;

		const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
		const inviter = client.users.cache.get(invite.inviter.id)
	

		
		


	let logchanneldestid = '833815923457654844' 
let newinviteembed = new discord.MessageEmbed()
.setTitle('Invite')
.setAuthor(member.user.tag)
.addField('Invited by', inviter.tag)
.addField('Used invite code',invite.code)
.addField('Code uses since creation', invite.uses)
.setColor('GREEN')
client.channels.cache.get(logchanneldestid).send(newinviteembed)

	})


	

	//welcome
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
		// Autoroles 
		var role = member.guild.roles.cache.find(role => role.name == "M100")
		member.roles.add(role);
})

	})

//left log

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
