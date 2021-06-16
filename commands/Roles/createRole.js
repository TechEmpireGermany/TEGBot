const Discord = require('discord.js')

module.exports = {
	name: "createR",
	description: "Creates a role dude",
	aliases: ['cr', 'createrole', 'createRole'],
	async execute (client, message, args){
    message.react("✅");  
    let namer = args[0]
        let hexcolour = args[1]
        let perm = args[2]
        if(!message.member.hasPermission("ADMINSTRATOR")) return message.reply("Err no")
        if(!message.guild.me.hasPermission("ADMINSTRATOR")) return message.channel.send("Id have any perms :(")
        if(!namer) return message.reply("Give me a name, idiot")
        if(!hexcolour){
            hexcolour = "#fc8403"
        }
        if(namer.includes("#")) return message.reply("The colour comes after name dude and you cannot have # in names of roles")
        if(!hexcolour.includes("#")) return message.reply("Something went wrong most probably in `hexcolour` (Bot did not crash)")
        if(!isNaN(perm)) return message.reply("Perms dont have numbers dude run `!permlist` to see the perms available +_+")
        if(!perm){
            let createRoleperm = message.guild.roles.create({
                data: {
                  name: namer,
                  color: hexcolour,
                },
                reason: `Role created by ${message.author.tag}`,
              })
                .catch(console.error);
                let embed = new Discord.MessageEmbed()
                    .setTitle("Role created")
                    .setThumbnail(message.author.displayAvatarURL())
                    .addField('Role created by', message.author.tag)
                    .addField('Role name', namer)
                    .addField('Colour', hexcolour)
                    .setFooter('Time created', client.user.displayAvatarURL())
                    .setTimestamp()
                    client.channels.cache.get(`825785679220703243`).send(embed)
        }
        if(perm){
        let createRole = await message.guild.roles.create({
            data: {
              name: namer,
              color: hexcolour,
              permissions: perm,
            },
            reason: `Role created by ${message.author.tag}`,
          })
            .catch(console.error);
            let embed = new Discord.MessageEmbed()
                .setTitle("Role created")
                .setThumbnail(message.author.displayAvatarURL())
                .addField('Role created by', message.author.tag)
                .addField('Role name', namer)
                .addField('Colour', hexcolour)
                .addField('Permissions', perm)
                .setFooter('Time created', client.user.displayAvatarURL())
                .setTimestamp()
                client.channels.cache.get(`825785679220703243`).send(embed)
        }









        
    }
}