const Discord = require('discord.js')

module.exports = {
	name: "ban",
	description: "Bans a member from a server",
	async execute (client, message, args){
	if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have the right perms");
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I dont have the perms to ban");

	let reason = args.slice(1).join(" ")
	const mentioned = message.mentions.members.first();

	if(!reason) reason = "Unspecified";
	if(!args[0]) return message.channel.send("You must specify a person to ban")
	if(!mentioned) return message.channel.send("That user does not exist try again")
	if(!mentioned.bannable) return message.channel.send("That user has a role which is above my role or is a mod/admin");

	const embed = new Discord.MessageEmbed()
	.setTitle('User Banned')
	.setThumbnail(mentioned.user.displayAvatarURL())
	.addField('User banned', mentioned)
	.addField('Banned by', message.author)
          .addField('Reason', reason)
	.setFooter('Time banned', client.user.displayAvatarURL())
	.setTimestamp()
	client.channels.cache.get(`824194262279127060`).send(embed)

		await mentioned.send(embed).catch(err => console.log(err))
		await mentioned.ban({
		   days: 7,
		   reason: reason,
		}).catch(err => console.log(err)).then(() => message.react("✅"))
	}
}