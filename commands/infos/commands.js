module.exports = {
    name: 'commands',
    aliases: [`help`],
    category: 'Infos',
    utilisation: '{prefix}commands',


    execute(client, message) {
        
        message.delete();
        
        message.channel.send({
            embed: {
                color: 'BLUE',
                author: { name: "Commands" },
                fields: [
                    {name: '!Windows-setup:', value: "showing all fresh installation steps."},
                    {name: '!bootkeyz:', value: "Pretty obvious what this command does"},
                    {name: '!cpuz:', value: "Gives the download link for CPU-Z"},
                    {name: '!hwmonitor:', value: "Gives the download link for HWMONITOR"},
                    {name: '!key:', value: "Download link for Jellybean keyfinder"},
                    {name: '!nvidia', value: "gives the download link for Nvidia Drivers"},
                    {name: '!safemode:', value: "Official Microsoft post about the options how to get into safemode"},
                    {name: '!security:', value: "Alias: !Malwarebytes"},
                    {name: `!deinstalling` , value: "gives a YT-link how to deinstalling a programm."},
                    {name: `!defrag` , value: "Shows how to defrag/optimize NTFS drives"},
                    {name: `!justask` , value: "If someone asks to ask."},
                    {name: `!coding` , value: "gives a invite to a Coding support server"},
                    {name: `!cortex` , value: "Download link for Razer Cortex."},
                    {name: `hw-chrome` , value: "how to disable hardware acceleration on Chrome."}

                ]
            },
        });}}