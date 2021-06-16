module.exports = {
    name: 'key',
    aliases: [],
    category: 'spteam-commands',
    utilisation: '{prefix}key',

    execute(client, message) {

        message.delete();


        message.channel.send("https://www.magicaljellybean.com/downloads/KeyFinderInstaller.exe");


    }};
