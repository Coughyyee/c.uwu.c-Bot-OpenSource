const Discord = require('discord.js')

module.exports = {
    name: "daily",
    cooldown: 1000 * 60 * 60 * 24,
    description: "collect dailt, earn money (500-2500 coins)",

    async run (bot, message, args) {
        
        const coins = Math.floor(Math.random() * 1750) + 750;

        message.channel.send(`You recieved **${coins}** coins today! Make sure to come back again tomorrow!`)
        bot.add(message.author.id, coins)
    }
}