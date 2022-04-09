const db = require('../../schema/warns')
const Discord = require('discord.js')


module.exports = {
    name: "total-warns",
    aliases: ['totalwarns', 'warns', 'warnstotal'],
    description: "total warns command",

    async run (bot, message, args) {
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('You do not have the permissions to use that command!').then(message => {
            message.delete({ timeout: 25000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[1]) || message.author;
        if(!user) return message.reply('Please specify a **valid** user!')
        const reason = args.slice(2).join(" ")
        db.findOne({ guildId: message.guild.id, userId: user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                let embed = new Discord.MessageEmbed()
                .setColor("ORANGE")
                .setTitle(`${user.tag}'s Total Warns`)
                .setDescription(
                    data.content.map(
                        (w, i) => `\`${i + 1}\` | Moderator: ${message.guild.members.cache.get(w.moderator).user.tag}\nReason: ${w.reason}`
                )
                )
                .setTimestamp()
                .setFooter(bot.user.tag, bot.user.displayAvatarURL())


                message.channel.send(embed)
            } else {
                message.channel.send(`${user} has no Warns!`)
            }
        });
    }
}