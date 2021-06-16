const Discord = require('discord.js');
const moment = require("moment");
module.exports = {

    name: 'userinfo',
    description: "tells info",
     async execute (client,message, args){
     let mentionedMember = message.mentions.members.first() || message.member 
     
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


   
     
     const userEmbed = new Discord.MessageEmbed()
     .setTitle(`User Information for ${mentionedMember.user.username}`)
     .setThumbnail(mentionedMember.user.displayAvatarURL())
     .addField('Username:', `${mentionedMember.user.username}`)
     .addField('Tag:', `${mentionedMember.user.tag}`)
     .addField("User ID:", `${mentionedMember.id}`)
     .addField('Avatar:', `Click below to see avatar (${mentionedMember.user.displayAvatarURL({ dynamic: true})})`)
     .addField('Status:', `${status}`)
     .addField('Activity:', `${act || 'None'}`)
     .addField("Account created:", `${moment(mentionedMember.createdAt).format("DD-MM-YYYY [at] HH:mm")}`)
     .addField("Joined the server at:", `${moment(mentionedMember.joinedAt).format("DD-MM-YYYY [at] HH:mm")}`)
     .addField(`Roles: [${roles.length}]`, `${displayRoles}`)
     
     

     message.channel.send(userEmbed).catch(err => console.log(err));
     
     
    }
     }