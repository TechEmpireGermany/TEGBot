module.exports = {
    name: "purge",
    description: "Clears messages",

    async execute(client, message, args) {
        const amount = args.join(" ");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have `MANAGE_MESSAGES` permission")
        if(!amount) return message.reply('Please provide an amount of messages for me to delete')
        if(amount > 100) return message.reply(`You cannot delete more than 100 messages at once`)
        if(amount < 1) return message.reply(`You need to delete at least one message`)
        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
	  message.react("✅")
    )});
    let embed = new Discord.MessageEmbed()
	.setTitle("Messages Deleted)
	..setThumbnail(mentioned.user.displayAvatarURL())
	.addField('Messages Deleted', amount)
	.addField('Deleted by', message.author)
	.setFooter('Time deleted', client.user.displayAvatarURL())
	.setTimestamp()
	client.channels.cache.get(`824194262279127060`).send(embed)

    }
}