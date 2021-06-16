const Discord = require('discord.js')

module.exports = {
	name: "permlist",
	description: "show perms",
	aliases: ['sp', 'zest', 'perml'],
	async execute (client, message, args){
		message.reply(new Discord.MessageAttachment('./permy.png', 'permy.png') )
            		.catch(console.error);
}
}