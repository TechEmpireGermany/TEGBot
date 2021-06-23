module.exports = {
    name: 'activity-list',
    aliases: [`activity`],
    category: 'Infos',
    utilisation: '{prefix}activity-list',


 async   execute (client,message) {

    const Levels = require("discord.js-leveling")

    if(!message.member.hasPermission("ADMINSTRATOR")) return message.channel.send("you don't have permissions  to use this Command!")




    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); 

    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
    
    const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); 

    
    
    const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nActivity: ${e.level}\nActivity Points: ${e.xp.toLocaleString()}`); 
    


    message.channel.send(`**Activity**:\n\n${lb.join("\n\n")}`);





 }}