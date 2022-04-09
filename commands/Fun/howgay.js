const Discord = require('discord.js')

module.exports = {
    name: "howgay",
    description: "how gay command",

    async run (bot, message, args) {

        let member = message.mentions.users.first() || message.author

        let rng = Math.floor(Math.random() * 101);


        const embed = new Discord.MessageEmbed()
        .setTitle(`Gay Machine Calculator`)
        .setDescription(`${member.username} is ` + rng + "% Gay🌈")
        .setColor("GREEN")

        message.channel.send(embed);
    }
}