module.exports = {
    name: 'hwmonitor',
    aliases: [],
    category: 'spteam-commands',
    utilisation: '{prefix}hwmonitor',

    execute(client, message) {

        message.delete();

        message.channel.send("https://www.cpuid.com/downloads/hwmonitor/hwmonitor_1.43.exe");

    }};