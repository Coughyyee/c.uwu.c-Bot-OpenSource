const Discord = require('discord.js')

module.exports = {
    name: "ping",
    description: "Ping Command.",

    async run (bot, message, args) {

        const ping = new Discord.MessageEmbed()
        .setColor(0xFFFFFF)
        .setDescription(`🏓\`${Date.now() - message.createdTimestamp}\`ms`);

        message.channel.send(ping).then(message => {
            message.delete({ timeout: 10000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
    }
}