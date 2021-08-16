

const BypassroleandstaffID = '850684245927788554'
const spteamstaffchannel =  `824065058388181013`
const modtalk = `824057837491453982`
const botdevelopment = `824216769442218004`
const botcommands = `824326748426469396`
const Ownerarea = `824066908097740910`
const ticketcreate =  '824684376398233670'
	const suggestions =  '824926277868978186'
	const general =  '824042976371277888'
	const games = '824059985998381138'
	const setups = '824737989850169355'
	const memes =  '824738477291601980'
	const music =  '824067063941300224'
	const funbots =  '832535838289297408'
	const supportteam = '824065058388181013'
	const bump =  '824185956549787659'
	let generalsupport =  `824059680905101333`
let gamingsupport =  `824059755935957023`
let softwaresupport =  `824059831513907200`
let hardwaresupport =  `824059920826499093`
let vcchat =  `824061207924965416`
const  OwnerRoleID =  '824063311829925898'
const stafflogs =   '824194262279127060'
const messagefilterlog = '835519322909573190'
const DMlog  = '853984661360869386'
const messagedeletelog = '825774127661973545' 
const bannedlog = '825788452103913522'
 const messageeditlog = '825774068313358346'
const Nicknamelog = '825773983000690698'
const roleaddedremoved = '825785679220703243'
const unbannedlog = '825788500179812363'
const inviteslog = '833815923457654844' 
const welcome = '824060103119470622'
const joined = '824319260540010557'
const left = '824321468279947275'


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
	
	

	let membersWithRole = message.guild.roles.cache.get(BypassroleandstaffID,OwnerRoleID).members;

	let staff = message.guild.roles.cache.get(BypassroleandstaffID);












	







	if(message.member.roles.cache.has(staff.id))  {

		if(message.channel.id === ticketcreate) return
		if(message.channel.id ===suggestions) return
		if(message.channel.id ===general) return
		if(message.channel.id ===games) return
		if(message.channel.id ===setups) return
		if(message.channel.id ===memes) return
		if(message.channel.id ===music) return
		if(message.channel.id ===funbots) return
		if(message.channel.id ===supportteam) return
		if(message.channel.id ===bump) return










		
		
	
		let owners = message.guild.roles.cache.get(OwnerRoleID);

		if (message.member.roles.cache.has(owners.id)) return

		

		

		const randomAmountOfXp = Math.floor(Math.random() * 10) + 1; 

	

  
   
  
   
   const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
  
   if(hasLeveledUp) {

	



	  
		  const user = await Levels.fetch(message.author.id, message.guild.id);

		 
		  
		  console.log(`Activity  Point given: ${message.author.tag}`)


		  let channelID =  stafflogs
	let logdest = new discord.MessageEmbed()
		.setTitle(`Activity Point given`)
		.setDescription(` ${message.author.tag} Got a new Activity Point!`)
		.setColor("BLUE")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)

	

   }}})
	
	  
  


// anti swear part
client.on('message', async message => {





	






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
		
		if (message.channel.id === spteamstaffchannel) return
		if (message.channel.id ===modtalk) return
		if (message.channel.id ===botdevelopment) return
		if (message.channel.id ===botcommands) return
		if (message.channel.id ===Ownerarea) return









	

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
		client.channels.cache.get(messagefilterlog).send(yesembed)
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
		const dmreplyembed = new discord.MessageEmbed()
.setTitle('Automatic DM reply')
.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
.setFooter('we can see every DM you send to the Bot')
.setColor('BLUE')
if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)
		let ownerid = OwnerRoleID;
	let membersWithRole = message.guild.roles.cache.get(ownerid).members;

		let owners = message.guild.roles.cache.get(OwnerRoleID)
if (message.member.roles.cache.has(owners.id)) return
if (message.channel.id ===spteamstaffchannel) return
if (message.channel.id ===modtalk) return
if (message.channel.id ===botdevelopment) return
if (message.channel.id ===botcommands) return
if (message.channel.id ===Ownerarea) return





		

		
		
		
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
		client.channels.cache.get(messagefilterlog).send(yesembed)
		message.author.send(userembed)
	}
})
//auto response
		
	
	
	client.on('message', (message) => {










	
if (message.content.includes("issue","is anybody able to help me?", "can  i get some help?", "i need help", "anyone able to help")) {

	







	const dmreplyembed = new discord.MessageEmbed()
	.setTitle('Automatic DM reply')
	.setDescription(`Hello this is a automatically send message as reply to a DM, please don't message our BOT if you want to tell us something do it on the Server thank you`)
	.setFooter('we can see every DM you send to the Bot')
	.setColor('BLUE')
	if (message.channel.type === 'dm') return message.channel.send(dmreplyembed)

	if(message.author.bot) return 


	let roleID = BypassroleandstaffID;
			let membersWithRole = message.guild.roles.cache.get(roleID).members;
		
			let bypass = message.guild.roles.cache.get(BypassroleandstaffID);
		
			if(message.member.roles.cache.has(bypass.id)) return






			if(message.channel.id ===generalsupport) return
			if(message.channel.id ===gamingsupport) return
			if(message.channel.id ===softwaresupport) return
			if(message.channel.id ===hardwaresupport) return
			if(message.channel.id ===vcchat) return









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
	
	
			let roleID = BypassroleandstaffID;
			let membersWithRole = message.guild.roles.cache.get(roleID).members;
		
			let bypass = message.guild.roles.cache.get(BypassroleandstaffID);
		
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



		let roleID = BypassroleandstaffID;
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get(BypassroleandstaffID);

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
		client.channels.cache.get(messagefilterlog).send(yesembed)
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



		let channelID = DMlog
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
	
	
	
	
	let roleID = BypassroleandstaffID;
	let membersWithRole = message.guild.roles.cache.get(roleID).members;

	let bypass = message.guild.roles.cache.get(BypassroleandstaffID);

	if(message.member.roles.cache.has(bypass.id)) return


	
	if(!message.member) message.member = `not detected`
	if(!message.channel) message.channel = `not detected`
	if(!message.content) message.content = `not detected`


	let channelID =messagedeletelog
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
		let channelID = bannedlog
	let logdest = new discord.MessageEmbed()
		.setTitle(`Banned`)
		.setDescription(` User banned: ${user.tag} banned by: ${executor.tag}`)
		.setColor("RED")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)

		
		
	} else {
		let channelID = bannedlog
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


	let roleID = BypassroleandstaffID;
	let membersWithRole = oldMessage.guild.roles.cache.get(roleID).members;

	let bypass = oldMessage.guild.roles.cache.get(BypassroleandstaffID);

	if(oldMessage.member.roles.cache.has(bypass.id)) return


	
	const MessageLog = client.channels.cache.find(channel => channel.id === messageeditlog);
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
	  client.channels.cache.get(Nicknamelog).send(membernewnicklog);
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
	  client.channels.cache.get(Nicknamelog).send(memberremovenicklog);
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
	  client.channels.cache.get(Nicknamelog).send(memberchangednicklog);
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
           
				client.channels.cache.get(roleaddedremoved).send(Embedroles1)
			
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
           
				client.channels.cache.get(roleaddedremoved).send(Embedroles2);
			
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
		let channelID = unbannedlog
	let logdest = new discord.MessageEmbed()
		.setTitle(`Unbanned`)
		.setDescription(` User Unbanned: ${user.tag} Unbanned by: ${executor.tag}`)
		.setColor("RED")
		.setTimestamp()
	client.channels.cache.get(channelID).send(logdest)

		
		
	} else {
		let channelID = unbannedlog
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
	

		
		


	let logchanneldestid = inviteslog 
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
		.setDescription(`${member.user.tag} has joined ${member.guild.name}!`)
		.setThumbnail(member.user.displayAvatarURL())
		.setColor("GREEN")
		.setTimestamp()
		member.guild.channels.cache.get(welcome).send(embed)
	let userembed = new discord.MessageEmbed()
		.setTitle(`Welcome to ${member.guild.name}`)
		.setDescription(`Check out the rules channel and enjoy your stay! 😀`)
		.setColor("ORANGE")
		member.send(userembed);
		let channelID2 = '824319260540010557'
	let embed2 = new discord.MessageEmbed()
		.setTitle(`Member Joined`)
		.setDescription(`${member.user.tag} has joined ${member.guild.name}!`)
		.setColor("GREEN")
		.setTimestamp()
		member.guild.channels.cache.get(joined).send(embed2)
		// Autoroles 
		var role = member.guild.roles.cache.find(role => role.name == "M200")
		member.roles.add(role);
})

	})

//left log

client.on('guildMemberRemove', (member) => {
	let channelID = '824321468279947275'
	let embed = new discord.MessageEmbed()
		.setTitle(`Member Left`)
		.setDescription(`${member.user.tag} has left TechSupportCentral`)
		.setThumbnail(member.user.displayAvatarURL())
		.setColor("RED")
		.setTimestamp()
		client.channels.cache.get(left).send(embed)
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
