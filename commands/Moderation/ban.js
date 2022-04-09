const Discord = require('discord.js')
const pink = require('../../assets/colors/pinks.json')


module.exports = {
    name: "ban",
    description: "ban command",

    async run (bot, message, args) {


        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You can't use this command! (⁎˃ᆺ˂)").then(message => {
            message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        let pinks = pink;
        let pinksresult = Math.floor((Math.random() * pinks.length));


        let reason = args.slice(2).join(" ");
        const mentionedMember = message.mentions.members.first();

        if (!reason) reason = 'No reason given';
        if (!args[0]) return message.channel.send("You need to specify a user to ban! (๑>◡<๑)").then(message => {
            message.delete({ timeout: 12500 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
        if (!mentionedMember) return message.channel.send("The user specified is not a valid user / is no-longer in the server. ( •᷄ὤ•᷅)？").then(message => {
            message.delete({ timeout: 12500 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
        if (!mentionedMember.bannable) return message.channel.send('I am unable to ban that user! *Sorry* ●.◉').then(message => {
            message.delete({ timeout: 12500 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        const banEmbed = new Discord.MessageEmbed()
        .setTitle(`You were banned from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor(pinks[pinksresult])
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL());

        try {
            await mentionedMember.send(banEmbed);
        } catch (err) {

        }
        try {
            await mentionedMember.ban({
                reason: reason
            });
            message.channel.send("Successfully banned: " + mentionedMember.user.tag);
        } catch (err) {
            return message.channel.send("I Think i couldnt message the user!?&%£?...").then(message => {
                message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
            }) .catch
        }
    }
}