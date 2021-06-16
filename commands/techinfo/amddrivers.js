module.exports = {
    name: 'amddrivers',
    aliases: ['amd'],
    category: 'spteam-commands',
    utilisation: '{prefix}amddrivers',

    execute(client, message) {

        message.delete();

        message.channel.send("https://www.amd.com/en/support");


    }};