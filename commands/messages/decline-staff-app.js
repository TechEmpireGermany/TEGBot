const discord = require("discord.js")
module.exports = {
    name: 'staffappdecline',
    aliases: [`staff-decline`],
    category: 'messages',
    utilisation: '{prefix}staffappdeclinedm',

    async execute(client, message, args,roles) {

        var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        var custompart = args.slice(1).join(" ")
        if (!custompart) custompart = 'Thanks for supporting our Server!'
       

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')

        const embedmessage = new discord.MessageEmbed()
        .setTitle('your Staff application on TSC got declined')
        .setDescription('your staff application on TSC got declined please open a ticket for more information')
        .setFooter(custompart)
        .setColor('BLUE')




        message.react("✅");
        message.channel.send(embedmessage)

        user.send(embedmessage)
        



    }}