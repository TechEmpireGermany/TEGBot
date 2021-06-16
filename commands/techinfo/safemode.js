module.exports = {
    name: 'safemode',
    aliases: [],
    category: 'spteam-commands',
    utilisation: '{prefix}safemode',

    execute(client, message) {

        message.delete();

        message.channel.send("https://support.microsoft.com/en-us/windows/start-your-pc-in-safe-mode-in-windows-10-92c27cff-db89-8644-1ce4-b3e5e56fe234");


    }};