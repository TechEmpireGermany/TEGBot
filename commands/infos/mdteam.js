module.exports = {
    name: 'mdteam',
    aliases: [],
    category: 'staff-re',
    utilisation: '{prefix}mdteam',



    execute(client, message)  {

        message.delete();

        message.channel.send({
            embed: {
                color: 'YELLOW',
                author: { name: "mod-requirements" },
                fields: [
                    { name: 'self-promo:', value: "if someone does self promo on the server or DM´s your Job is to ping people who can ban and warn/mute them!"  },
                    { name: 'corruption:', value: "if someone in the staff team does things he shouldn´t do let the owners know about that"  },
                    {name: `rules`, value : "You should know when to warn, mute and ask senior staff members to ban."},
                    {name: `activity`, value: "Must be active 6-7 times a week."},
                    {name: `DC-experience`, value: "You must have a discord account older than 4-5 months."},
                    {name: `non-escalation` , value: "Know how to defuse heated situations in a quick and efficient manner."},
                    {name: `Server-Experience`, value: "You must be atleast 1week-1month on the Server." }



                  

                    
                    
                   
                ]

            
            },




        });}}