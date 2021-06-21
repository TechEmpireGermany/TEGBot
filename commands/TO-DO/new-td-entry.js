const { Client, Message, MessageEmbed} = require('discord.js');



module.exports = {
    name: 'add-td-entry',
    aliases: [`td-add`],
    category: 'td',
    utilisation: '{prefix}add-td-entry',



    


    async execute(client, message, args){


        let roleID = "856618346836394035";
    let membersWithRole = message.guild.roles.cache.get(roleID).members;

    let Organizer = message.guild.roles.cache.get("856618346836394035");

    if(!message.member.roles.cache.has(Organizer.id)) return message.channel.send("you are not a Todo Tasks Organizer command returned.")


        
        const query = args.join(" ");
        if(!query) return message.reply("Please specify what's to do!");
    const embed = new MessageEmbed()
      .setAuthor(message.author.tag)
      .setDescription(`**To-do**: ${query}`)
      .setColor("GREY")
      .setTimestamp()
      .addField("Status",'undone')
    message.react("✅");

    message.guild.channels.cache.get("856599798262399036").send(embed);
    }
    };