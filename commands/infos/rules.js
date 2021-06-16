module.exports = {
    name: 'rules',
    aliases: [],
    category: 'Infos',
    utilisation: '{prefix}rules',



    execute(client, message)  {

        message.delete();


        message.channel.send({
            embed: {
                color: 'GREEN',
                author: { name: "rules" },
                fields: [
                    { name: '#1:', value: " Be respectful to our Support Team, they provide advice/help voluntarily during their own time."  },
                    { name: '#2:', value: "We do not tolerate profanity at all. This server must be kept SFW for all members included."  },
                    { name: '#3:', value: " We do not tolerate any forms of racism, sexism, prejudice, discrimination etc. This results in an immediate ban."  },
                    {name: `#4` ,value: "To make it easier for our Support Team to help you, please ping them and state your issue in one message."},
                    {name: `#5` ,value: "Follow Discord TOS. https://discord.com/terms"},
                    {name: `#6` ,value: "No self promotion allowed. Failure to do so follows with the appropriate sanction."},
                    {name: `#7` ,value: "Do not leak or request any personal information (i.e. IP Addresses, Full Names, Dates of Birth etc."},
                    {name: `#8` ,value: " Please do not give any false or misleading information when helping someone with a case. If you want to help then please apply via our staff application forms."},
                    {name: `#9` ,value: " English is the primary language of this server, should you require help in another language then please open a ticket in #ticket-create and we can advise you there."},
                    {name: `#10`, value: "We do not offer help/support with pirated or cracked content. It is against our rules and it is illegal. This will result in the appropriate sanction."}

                    
                    
                   
                ]

            
            },




        });}}
            

               

                    



                

            



        