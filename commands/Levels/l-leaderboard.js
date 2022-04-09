const Discord = require('discord.js');
const Levels = require('discord-xp');

module.exports = {
    name: "level-leaderboard",
    aliases: ['llb', 'l-lb'],
    cooldown: 1000 * 10,
    description: "levels lb",

    async run(bot, message, args) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);

        if (rawLeaderboard.length < 1) return reply("Nobody's on the leaderboard yet...");

        const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true);

        const lb = leaderboard.map(e => `**${e.position}.** ${e.username}#${e.discriminator}\n**Level:** ${e.level}\n**XP:** ${e.xp.toLocaleString()}`);

        const embed = new Discord.MessageEmbed()
        .setColor(0xADECED)
        .setTitle(`${message.guild.name}'s Levels Leaderboard!`)
        .setDescription(lb.join("\n\n"))

        message.channel.send(embed);  //`**Leaderboard**:\n\n${lb.join("\n\n")}`
    }
}