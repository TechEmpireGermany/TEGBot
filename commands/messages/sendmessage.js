module.exports = {
    name: 'sendmessage',
    aliases: [`sm`],
    category: 'messages',
    utilisation: '{prefix}sendmessage',

    async execute(client, message,args) {

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0])
        if(!channel) return message.channel.send('Channel not found.')
        const custompart = args.slice(1).join(" ")

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')

        message.delete();
        message.channel.send(custompart);
    }}
