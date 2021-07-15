const Discord = require('discord.js')

module.exports = {
	name: "hackban",
	description: "Bans a member from a server",
	async execute (client, message, args){
	if(!message.member.hasPermission("BAN_MEMBERS")) return 
	if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("I dont have the perms to ban");

	let reason = args.slice(1).join(" ")
	const userId = args[0]
	
	const embed = new Discord.MessageEmbed()
	.setTitle('Hackbanned')
	.addField('ID banned', userId)
	.addField('Banned by', message.author)
          .addField('Reason', reason)
	.setFooter('Time banned', client.user.displayAvatarURL())
	.setTimestamp()


	if(!reason) reason = "Unspecified";
	if(!userId) return message.reply("You must specify an Id to ban a person")
	if(userId == message.author.id) return message.reply("You cannot ban yourself, if you are **really** in the mood ask the owners")
	if(userId == client.user.id) return message.reply("Yup you are evil want to ban me? one word: **no**");
	if(isNaN(userId)) return message.reply("The discord id of a user is a number not a string");
	client.users.fetch(userId).then(async user =>{
		await message.guild.members.ban(user.id, {reason: reason});
		message.react("✅");
		client.channels.cache.get(`824194262279127060`).send(embed)
});
		
	}
}