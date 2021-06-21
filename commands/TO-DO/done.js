
const { Client, Message, MessageEmbed} = require('discord.js');

module.exports = {

    name: 'done',
    aliases: [],
    category: 'td',
    utilisation: '{prefix}done',
    
   
    async execute(client, message, args) {
        const messageID = args[0];
        if(!messageID) return message.channel.send("Would you specify an id?");
        try{


            let roleID = "856618346836394035";
            let membersWithRole = message.guild.roles.cache.get(roleID).members;
        
            let Organizer = message.guild.roles.cache.get("856618346836394035");
        
            if(!message.member.roles.cache.has(Organizer.id)) return message.channel.send("you are not a Todo Tasks Organizer command returned.")



            const todoChannel = message.guild.channels.cache.get('856623578371719168')
             const todoEmbed = await todoChannel.messages.fetch(messageID);
          
          const data =todoEmbed.embeds[0];
          const newTDEmbed = new MessageEmbed()
               .setAuthor(data.author.name)
                      .setColor("GREEN")
                      .setDescription("Status: done")
            
        message.react("✅");
        todoEmbed.edit(newTDEmbed);
        const user = await client.users.cache.find((u) => u.tag === data.author.name)
        user.send("Your todo entry is done");
    }catch(err){
    console.log(err)
    message.reply("That entry does not exist in this universe");
    }
    }
    }


