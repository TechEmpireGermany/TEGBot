module.exports = {
    name: 'nvidiadrivers',
    aliases: ['nvidia'],
    category: 'spteam-commands',
    utilisation: '{prefix}nvidiadrivers',

    execute(client, message) {

        message.delete();
        

        message.channel.send("https://www.nvidia.com/en-gb/geforce/drivers/");

    }};