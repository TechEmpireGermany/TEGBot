module.exports = {
    name: 'staffappdecline',
    aliases: [`staff-decline`],
    category: 'messages',
    utilisation: '{prefix}staffappdeclinedm',

    async execute(client, message, args,roles) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const custompart = args.slice(1).join(" ")

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')


        message.react("✅");
        message.channel.send(`**send: your stuff application on TEG got declined please open a ticket for more information--${custompart}**`)

        user.send(`your stuff application on TEG got declined please open a ticket for more information**--**${custompart}`)
        



    }}