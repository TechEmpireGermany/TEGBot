const discord = require("discord.js")
module.exports = {
    name: 'staffappaccept',
    aliases: [`staff-accept`],
    category: 'messages',
    utilisation: '{prefix}staffacceptdm',

    async execute(client, message, args,roles) {

        var user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        var custompart = args.slice(1).join(" ")
        if (!custompart) custompart = 'Thanks for supporting our Server!'

        

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')

      


        message.react("✅");
const embedmessage = new discord.MessageEmbed()
.setTitle('Your staff Application got accepeted!')
.setColor('BLUE')
.setDescription(` your staff application on TSC got accepted please open a ticket for more information`)
.setFooter(custompart)


        message.channel.send(embedmessage)

        user.send(embedmessage)
        



    }}