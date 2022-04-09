const Discord = require('discord.js')

module.exports = {
    name: "dice",
    description: "dice command, roll a 1-6",

    async run (bot, message, args)  {

        const embed = new Discord.MessageEmbed()
        .setColor(0x000000)
        .setTitle("Dice Game")
        .setDescription(`🎲 **${message.author.username}**, you rolled a **${Math.floor(Math.random() * 6) + 1}**!`);

        message.channel.send(embed)
    }
}