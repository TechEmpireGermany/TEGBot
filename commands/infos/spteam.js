module.exports = {
    name: 'spteam',
    aliases: [],
    category: 'staff-re',
    utilisation: '{prefix}spteam',



    execute(client, message)  {


        message.delete();

        message.channel.send({
            embed: {
                color: 'GREEN',
                author: { name: "support-requirements" },
                fields: [
                    { name: 'self-promo:', value: "if someone does self promo on the server or DM´s your Job is to ping people who can ban and warn/mute them!"  },
                    { name: 'corruption:', value: "if someone in the staff team does things he shouldn´t do let the owners know about that"  },
                    {name: `piracy`, value : "someone who ask for help with cracked and illegal stuff should not getting help from you with that report the person to the mod-team!"},
                    {name: `false-claims`, value: "if you´re not sure about something ask your mates to help the person instead of giving wrong information and doing false claims!"},
                    {name: `activity`, value: "Must be active at least 2-3 times a week."},
                    {name: `DC-experience`, value: "You must have a discord account older than a month."},
                    {name: `Server-Xp`, value: "You have to have been on the server for at least a week before applying."},
                    {name: `confidence` , value: "Be confident in the support you are applying."}


                  

                    
                    
                   
                ]

            
            },




        });}}