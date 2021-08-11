const discord = require("discord.js")
module.exports = {
    name: 'messageto',
    aliases: [`dm`],
    category: 'messages',
    utilisation: '{prefix}DMtomember',

    async execute(client, message, args,roles) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const dmmessage = args.slice(1).join(" ")
        if(!dmmessage) return message.channel.send("Please put in something i should send!")

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')

const embedmessage =  new discord.MessageEmbed()
.setTitle('DM')
.setDescription(dmmessage)
.setFooter('Official Message from TEG writen by the owner')
.setColor('BLUE')
const logmessage = new discord.MessageEmbed()
.setTitle('DM send to the user by TSC-BOT')
.setDescription(dmmessage)
.setFooter('Official Message from TEG writen by the owner')
.setColor('GREEN')
client.channels.cache.get('853984661360869386').send(logmessage)




        message.react("✅");
        message.channel.send(embedmessage)
         user.send(embedmessage)
         
        



    }}
