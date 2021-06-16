const Discord = require('discord.js')

module.exports = {
	name: "deleteR",
	description: "Deletes a role",
	aliases: ['dr', 'deleterole', 'deleteRole'],
	async execute (client, message, args){
	let roleName = args[0]
	let roleYes = message.mentions.roles.first()
	if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("Err no")
	if(!message.guild.me.hasPermission("ADMINSTRATOR")) return message.channel.send("Id have any perms :(")
	if(roleYes){
	roleName = roleYes.name
	let TheRoleFound = message.guild.roles.cache.find(role => role.name === roleName)
	if(message.guild.me.roles.highest.position < roleYes.position) return message.channel.send('This role appears to be higher than my role 😭');
	TheRoleFound.delete()
	let embed = new Discord.MessageEmbed()
                .setTitle("Role deleted")
                .setThumbnail(message.author.displayAvatarURL())
                .addField('Role deleted by', message.author.tag)
                .addField('Role name', roleName)
                .setFooter('Time deleted', client.user.displayAvatarURL())
                .setTimestamp()
                client.channels.cache.get(`825787981435502612`).send(embed)
}
       if(!roleYes){
	let TheRoleFound = message.guild.roles.cache.find(role => role.name === roleName)
	//if(message.guild.me.roles.highest.position < role.position) return message.channel.send('This role appears to be higher than my role 😭');
	// shh the above line no work :((((((
	TheRoleFound.delete()
	let embed = new Discord.MessageEmbed()
                .setTitle("Role deleted")
                .setThumbnail(message.author.displayAvatarURL())
                .addField('Role deleted by', message.author.tag)
                .addField('Role name', roleName)
                .setFooter('Time deleted', client.user.displayAvatarURL())
                .setTimestamp()
                client.channels.cache.get(`825787981435502612`).send(embed)
}

}
}