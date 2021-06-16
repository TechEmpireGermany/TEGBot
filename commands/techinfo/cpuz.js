module.exports = {
    name: 'cpuz',
    aliases: [],
    category: 'spteam-commands',
    utilisation: '{prefix}cpuz',

    execute(client, message) {

        message.delete();

        message.channel.send("https://www.cpuid.com/downloads/cpu-z/cpu-z_1.95-en.exe");


    }};
