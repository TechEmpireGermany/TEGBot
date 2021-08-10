module.exports = {
    name: 'linuxusb',
    category: 'spteam-commands',
    utilisation: '{prefix}linuxusb',

    execute(client, message) {

        message.delete();

        message.channel.send({
            embed: {
                color: 'BLUE',
                author: { name: "How to get a Linux Live USB" },
                fields: [
                    {name: 'Step 1:', value: "Decide what distro is best for you.\nIf you're not experienced with computers go with Linux Mint.\nIf you're experienced with computers but not with Linux go for Fedora or Manjaro.\nTry Fedora if you want something with a sleek design, or Manjaro's XFCE version if you want a more familiar design."},
                    {name: 'Step 2:', value: "Download the Linux ISO and the flashing tool.\nDepending on what distro you chose pick one of these links:\nLinux Mint: https://linuxmint.com/download.php\nManjaro XFCE: https://manjaro.org/downloads/official/xfce/\nFedora: https://getfedora.org/en/workstation/download/ (Instead of Fedora Media Writer, make sure to download the x86_64 ISO)\nFor the flashing tool you can use balenaEtcher or Rufus.\nbalenaEtcher is simple and gets the job done fast: https://balena.io/etcher/\nRufus has many more features but can be confusing to novices: https://rufus.ie"},
                    {name: 'Step 3:', value: "Once everything is downloaded, use the flashing tool to flash your ISO to a USB (the usb must be 8 GB or larger).\nSelect the Linux ISO you downloaded and the USB you want to flash to, then start the flashing process.\nWhen the flashing is done, unplug the usb and plug it into the device you want to boot into Linux (if it's the same device just leave it plugged in and shut down the PC)."},
                    {name: 'Step 4:', value: "Boot into Linux.\nTurn on the computer and start spamming the boot menu key (figure out which one yours is with the `!bootkey` command) until the menu pops up.\nWhen the menu pops up, select the USB to boot to."},
                    {name: 'Step 5:', value: "Install or try out linux.\nYour computer will boot to show the Linux desktop. Note that Linux is not installed on the computer, it's what is called a Live USB where you can test it out before you try it. Anything you do on the USB in this state will not be saved and doesn't affect your PC. If you wish to replace Windows with Linux, open the 'Install Linux' file on the desktop. If you want to return to Windows on the next reboot, simply restart the PC with the USB unplugged."}
                ]
            },
        });}}
