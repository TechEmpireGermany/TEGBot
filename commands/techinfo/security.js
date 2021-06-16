module.exports = {
    name: 'security',
    aliases: ['malwarebytes'],
    category: 'spteam-commands',
    utilisation: '{prefix}security',

    execute(client, message) {

        message.delete();


        message.channel.send("https://www.malwarebytes.com/mwb-download/thankyou/");


    }};