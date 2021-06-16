module.exports = {
    name: 'windows-setup',
    aliases: ['ws'],
    category: 'spteam-commands',
    utilisation: '{prefix}windows-setup',

    execute(client, message) {

        message.delete();

       message.channel.send("This tutorial will lead you how to do a fresh windows installation:  (All your data will be gone,  back it up and use `!key` in case you need to back up your Product Key too, please save it somewhere safe and don't show us or anyone the key!)");
       message.channel.send("https://youtu.be/bwJ_E-I9WRs")
       message.channel.send("To figure out which key you need to use to boot to a usb, run the command `!bootkey`.")

    }
}
