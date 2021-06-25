module.exports = {
    name: 'credit',
    aliases: [`credits`],
    category: 'Infos',
    utilisation: '{prefix}credit',

    execute(client, message) {
        
        message.delete();
        
        message.channel.send({
            embed: {
                color: 'PURPLE',
                author: { name: "credits" },
                fields: [
                    {name: 'Moderation:', value: "Developed by: Patriot Zest"},
                    {name: 'Welcome:', value: "Developed by: Patriot Zest"},
                    {name: 'Suggestions:', value: "Developed by: Patriot Zest"},
                    {name: 'Custom-Commands:', value: "Developed by: Patriot Zest"},
                    {name: 'Swear-Filter:', value: "Developed by: Patriot Zest"},
                    {name: 'Swear List:', value: "Topaz, converted and improved by BenTheTechGuy"},
                    {name: 'swear-filter improvements:', value: "Improved by: Philipp"},
                    {name: 'Activity Points System:', value: "Developed by Philipp" },
                    {name: 'To-Do System:', value: "Developed by Philipp" },
                    {name: 'Music:', value: "Developed by: Philipp"},
                    {name: 'embed-messsages', value: "Developed by: Philipp"},
                    {name: 'Auto-response', value: "Developed by: Philipp"},
                    {name: 'Bot hosting:', value: "Hosted by Philipp's Pentium"},
                    {name: 'Support Team Information:', value: "Developed by: BenTheTechGuy"},
                    {name: 'Support Team Custom Commands:', value: "Contributed by: Gracey"},
                    {name: 'Website:', value: "Created and Designed by: BenTheTechGuy"},
                    {name: 'Project Organizer:', value: "BenTheTechGuy"},
                ]
            },
    
      
        })

       

        message.channel.send({
            embed: {
                color: 'PURPLE',
                author: { name: "Github" },
                fields: [
                    {name: 'Link:' , value: "https://github.com/TechEmpireGermany"}

                ]

            },


        })}}