module.exports = {
    name: 'bootkeys',
    aliases: ['bootkey'],
    category: 'spteam-commands',
    utilisation: '{prefix}bootkeys',

    execute(client, message) {

        message.delete();

        message.channel.send({
            embed: {
                color: 'BLUE',
                author: { name: "One-time Boot Keys:" },
                fields: [
                    {name: 'Dell, Toshiba, Huawei, Lenovo:', value: "F12"},
                    {name: 'Acer:', value: "F12, F9, F2, Esc"},
                    {name: 'Apple:', value: "Option / Alt"},
                    {name: 'Asus:', value: "Esc"},
                    {name: 'HP:', value: "F9"},
                    {name: 'Intel:', value: "F10"},
                    {name: 'MSI:', value: "F11"},
					{name: 'Samsung:', value: "Esc, F12, F2"},
					{name: 'Sony:', value: "Esc, F10, F11"},
					{name: 'Other Common Ones:', value: "F2, F10, F12, Esc, Del"}
                ]
            },
        });}}
