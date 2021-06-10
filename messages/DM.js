
module.exports = {
    name: 'messageto',
    aliases: [`dm`],
    category: 'messages',
    utilisation: '{prefix}DMtomember',

    async execute(client, message, args,roles) {

        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.channel.send('User not found.')
        const dmmessage = args.slice(1).join(" ")

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')


        message.react("✅");

        user.send(`${dmmessage}**--Official Message from TEG writen by the owners--**`)
        



    }}
