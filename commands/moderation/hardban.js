const Discord = require('discord.js')

module.exports = {
	name: "hardban",
	description: "Bans a member from a server",
	async execute (client, message, args){
	if(!message.member.hasPermission("BAN_MEMBERS")) return 
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return

	let reason = args.slice(1).join(" ")
	const mentioned = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

	if(!reason) reason = "Unspecified";
	if(!args[0]) return message.channel.send("You must specify a person to ban")
	if(!mentioned) return message.channel.send("That user does not exist try again")
	if(!mentioned.bannable) return

	const embed = new Discord.MessageEmbed()
	.setTitle('Banned')
	.setThumbnail(mentioned.user.displayAvatarURL())
	.addField('User banned', mentioned)
	.addField('User ID', mentioned.id)
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
