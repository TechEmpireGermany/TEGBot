const discord = require("discord.js")
module.exports = {
    name: 'alert',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}alert',

    async execute(client, message, args) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const aldesc = args.slice(1).join(" ")
        if (!aldesc) return message.channel.send("would you please mention a reason for alerting the modteam?")
      
        let roleID2 = "824067621841666099"
        let roleID = "824056092899934218";
        let membersWithRole = message.guild.roles.cache.get(roleID,roleID).members;
    
        let bypass = message.guild.roles.cache.get("824056092899934218");
        let bypass2 = message.guild.role.cache.get("824067621841666099") 
    
        if(message.member.roles.cache.has(bypass.id)) return message.channel.send("why should a moderator alert his team using this command? i returned weak action dude ._.")
        if(message.member.roles.cache.has(bypass2.id)) return message.channel.send("why should a moderator alert his team using this command? i returned weak action dude ._.")

        message.delete()

let modtalk = '824057837491453982'
        const descembed = new discord.MessageEmbed()
.setTitle('Moderator Alert')
.setAuthor(`${message.author.tag} ID: ${message.member.id}`)
.setDescription(aldesc)
.addField('mentioned user', user)
.addField('Mentioned user ID' ,user.id)
.setColor('BLUE')
client.channels.cache.get(modtalk).send(descembed)
client.channels.cache.get(modtalk).send("\n<@&824067621841666099> \n<@&824056092899934218>")

    }}