const Discord = require('discord.js')

module.exports = {
    name: "serverinfo",
    description: "Shows server info",

    async run (bot, message, args) {

        const { guild } = message

        const { name, region, memberCount, owner, afkTimeout, } = guild
        const icon = guild.iconURL()

        const embed = new Discord.MessageEmbed()
            .setColor(0x3191FF)
            .setTitle(`Server Info For "${name}" 🏀ヘ(^o^ヘ)`)
            .setThumbnail(icon)
            .addFields(
               {
                name: 'Region',
                value: region,
               },
               {
                name: 'Members',
                value: memberCount,
               },
               {
                name: 'AFK Timout',
                value: afkTimeout / 60,
               },
               {
                name: 'Server Icon',
                value: icon,
               }
            )

        message.channel.send(embed)
    }
}