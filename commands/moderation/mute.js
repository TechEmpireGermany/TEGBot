const Discord = require('discord.js');
const ms = require('ms');

module.exports = {
    name: "mute",
    description: "Mutes a member from the server",

    execute(client, message, args) {
          if(!message.member.hasPermission("MANAGE_MANAGES")) return 
              var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
              if(!args[0]) return message.reply("Mention a member man")
              
              let role = message.guild.roles.cache.find(role => role.name === "MUTED");
              if(!role) return message.reply("Could not find the muted role")

	   if(member.id === message.author.id) return message.channel.send('No just no you cannot mute your self.');
              
             let reason = args.slice(2).join(" ");
             if(!reason) reason = 'Unspecified';

              let time = args[1]
              if(!time) {
                  return message.reply("You did not specify time")
                 }
                  member.roles.add(role.id)
                  const mutembed = new Discord.MessageEmbed()
        		.setTitle('Muted')
        		.setThumbnail(member.user.displayAvatarURL())
       		.addField('User muted', member)
		.addField('User ID', member.id)
        		.addField('Muted by', message.author)
        		.addField('Reason', reason)
		.addField('Muted for', time)
        		.setFooter('Time muted', client.user.displayAvatarURL())
        		.setTimestamp()
                   message.react("✅")
                   client.channels.cache.get(`824194262279127060`).send(mutembed)
     	         member.send(mutembed);

	setTimeout( function() {
               member.roles.remove(role.id);
               const unmutembed = new Discord.MessageEmbed()
        		.setTitle('Unmuted')
        		.setThumbnail(member.user.displayAvatarURL())
       		.addField('User unmuted', member)
        		.addField('Muted by', message.author)
        		.addField('Reason', reason)
		client.channels.cache.get(`824194262279127060`).send(unmutembed)
          }, ms(time));

    
     }}




        		
	     
                             
      
