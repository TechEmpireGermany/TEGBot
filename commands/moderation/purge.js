const Discord = require('discord.js')
module.exports = {
    name: "purge",
    description: "Clears messages",

    async execute(client, message, args) {
        const amount = args.join(" ");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return 
        if(!amount) return message.reply('Please provide an amount of messages for me to delete')
        if(amount > 100) return message.reply('You cannot delete more than 100 messages at once')
        if(amount < 1) return message.reply('You need to delete at least one message')
        if(isNaN(amount)) return message.reply("That's not a number")
        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
    });
    let embed = new Discord.MessageEmbed()
	.setTitle("Messages Deleted")
	.setThumbnail(message.author.displayAvatarURL())
	.addField('Messages Deleted', amount)
	.addField('Deleted by', message.author)
	.setFooter('Time deleted', client.user.displayAvatarURL())
    .addField('deleted in Channel:', message.channel)
	.setTimestamp()
	client.channels.cache.get(`824194262279127060`).send(embed)

    }
}
