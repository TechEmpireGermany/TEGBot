const Levels = require("discord.js-leveling")
const Discord = require('discord.js');
const moment = require("moment");
module.exports = {

    name: 'userinfo',
    description: "tells info",
     async execute (client,message, args){

       
       
        
       
        var mentionedMember = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));

       

        if(!mentionedMember) return (message.channel.send("Please mention someone!"))

        
     
     let act = mentionedMember.presence.game
     let status = mentionedMember.presence.status

   



     if(status == 'dnd') status = "Do Not Disturb"
     if(status == 'online') status = "Online"
     if(status == 'offline') status = "Offline"
     if(status == 'idle') status = "Idle"


	const roles =  mentionedMember.roles.cache
		.sort((a,b) => b.position - a.position)
		.map(role => role.toString())
		.slice(0,-1)

    let displayRoles;
    if(roles.length < 20) {
        displayRoles = roles.join(' ')
        if(roles.length < 1) displayRoles = "None"

    } else {
        displayRoles = roles.slice(20).join(' ')
    }
    let user = mentionedMember;

    message.guild.fetchInvites()
    .then

    (invites =>
        {
            const userInvites = invites.array().filter(o => o.inviter.id === user.id);
            var userInviteCount = 0;
            for(var i=0; i < userInvites.length; i++)
            {
                var invite = userInvites[i];
                userInviteCount += invite['uses'];
            }
              let invitecountembed = new Discord.MessageEmbed()
              .setTitle('Invitecount')
              .setAuthor(mentionedMember.user.tag)
              .setDescription(userInviteCount)  
              message.channel.send(invitecountembed)
        
            })


            const userlevel = await Levels.fetch(mentionedMember.id, message.guild.id);

            var userleveltarget = userlevel.level
    
            if (!userlevel) userleveltarget = 'Seems like this user is not a active staff member '
     
     const userEmbed = new Discord.MessageEmbed()
     .setTitle(`User Information for ${mentionedMember.user.username}`)
     .setThumbnail(mentionedMember.user.displayAvatarURL())
     .addField('Username:', `${mentionedMember.user.username}`)
     .addField('Tag:', `${mentionedMember.user.tag}`)
     .addField("User ID:", `${mentionedMember.id}`)
     .addField('Avatar:', `Click below to see avatar (${mentionedMember.user.displayAvatarURL({ dynamic: true})})`)
     .addField('Status:', `${status}`)
     .addField('Activity:', `${act || 'None'}`)
     .addField("Account created:", `${moment(mentionedMember.user.createdTimestamp).format('DD-MM-YYYY [at] HH:mm')}`)
     .addField("Joined the server at:", `${moment(mentionedMember.joinedAt).format("DD-MM-YYYY [at] HH:mm")}`)
     .addField(`Roles: [${roles.length}]`, `${displayRoles}`)
     .addField('Activity:' , userleveltarget)
     
     
     message.channel.send(userEmbed).catch(err => console.log(err));
     }
     }