const Discord = require('discord.js');


module.exports = {
    name: "avatar",
    aliases: ['icon', 'pfp', 'av'],
    description: "Shows someone's avatar",

    async run (bot, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({size: 1024})


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}'s avatar`)
        .setImage(avatar)
        .setColor("RANDOM")

        message.channel.send(embed);
    }
}
