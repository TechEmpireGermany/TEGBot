module.exports = {
    name: 'announcement',
    aliases: [`an`],
    category: 'messages',
    utilisation: '{prefix}announcements',

    async execute(client, message,args) {

        const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[1])
        if(!channel) return message.channel.send('Channel not found.')
        const custompart = args.slice(1).join(" ")

        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('You do not have permissions to use this command.')


        message.react("✅");
        channel.send({
            embed: {
                color: 'BLUE',
                author: { name: `Announcement` },
                fields: [
                    {name: "message", value: custompart}
                
                    
    
                  
                    
                   
                   
                ],
                timestamp: new Date(),
            },
        });

        
        



    }}
