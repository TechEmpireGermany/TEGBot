module.exports = {
    name: 'sendmessage',
    aliases: [`sm`],
    category: 'messages',
    utilisation: '{prefix}sendmessage',

    async execute(client, message,args) {

        
        const custompart = args.slice(0).join(" ")

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')

        message.delete();
        message.channel.send(custompart);
    }}
