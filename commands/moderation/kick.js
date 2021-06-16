const Discord = require('discord.js');

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    execute(client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('You can\'t use that!')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I don\'t have the right permissions.')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('Please specify a user');

        if(!member) return message.channel.send("Could not find user please try again");
        if(!member.kickable) return message.channel.send('Role hierarchy');
        if(member.id === message.author.id) return message.channel.send('Bruhhhh, you can\'t kick yourself!');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';

        member.kick(reason)
        message.react("✅")
        .catch(err => {
            if(err) return message.channel.send('Something went wrong')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Kicked')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('User Kicked', member)
        .addField('User ID', member.id)
        .addField('Kicked by', message.author)
        .addField('Reason', reason)
        .setFooter('Time kicked', client.user.displayAvatarURL())
        .setTimestamp()

        client.channels.cache.get(`824194262279127060`).send(kickembed)
        member.send(kickembed);
    }
}