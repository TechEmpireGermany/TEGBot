const Discord = require('discord.js')
module.exports = {
    name: "reactrole",
    description: "react a role",
    async execute(client, message, args){
        const reactionMessage = await message.channel.send("React for bump pings role");
    try {
      await reactionMessage.react("✅");
    } catch (err) {
      message.channel.send("err");
      throw err;
    } 
        let role = message.member.guild.roles.cache.get('825049916413444196')
        const collector = reactionMessage.createReactionCollector(
            (reaction, user) => message.guild.members.cache.find((member) => member.id === user.id),
            { dispose: true }
          );
        
          collector.on("collect", (reaction, user) => {
            if(reaction.emoji.name == "✅"){
            if(!message.guild.members.cache.get(user.id).roles.cache.has(role.id)){
            message.guild.members.cache.get(user.id).roles.add(role)
            user.send(`Role added ${role.name}`)
            }
          if(message.guild.members.cache.get(user.id).roles.cache.has(role.id)){
              message.guild.members.cache.get(user.id).roles.remove(role)
              user.send(`Role removed ${role.name}`)
          }
        }
    })
}
}
