const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "coinflip",
    description: "coin flip, heads or tails",

    async run (bot, message, args) {

        const coin = ':coin:';


        const h = new MessageEmbed()
        .setColor(0x111111)
        .setTitle(`${coin} Coin Flip`)
        .setDescription('HEADS!')

        const t = new MessageEmbed()
        .setColor(0x000000)
        .setTitle(`${coin} Coin Flip`)
        .setDescription('TAILS!')


        let random = (Math.floor(Math.random() * Math.floor(2)));
        if(random === 0) {
            message.channel.send(h)
        } else {
            message.channel.send(t)
        }
    }
}