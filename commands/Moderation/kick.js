const Discord = require('discord.js')
const blue = require('../../assets/colors/blues.json')


module.exports = {
    name: "kick",
    description: "kick command",

    async run (bot, message, args) {



        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("You can't use this command! (⁎˃ᆺ˂)").then(message => {
            message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        let blues = blue;
        let blueresult = Math.floor((Math.random() * blues.length));


        const mentionMember = message.mentions.members.first();
        let reason = args.slice(2).join(" ");
        if (!reason) reason = "No reason given";

        const kickEmbed = new Discord.MessageEmbed()
        .setTitle(`You were kicked from **${message.guild.name}**`)
        .setDescription(`Reason: ${reason}`)
        .setColor(blues[blueresult])
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[1]) return message.reply("You need to specify a user to kick! (๑>◡<๑)").then(message => {
            message.delete({ timeout: 12500 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
        if (!mentionMember) return message.reply("The user specified is not a valid user / is no-longer in the server. ( •᷄ὤ•᷅)？").then(message => {
            message.delete({ timeout: 12500 }) 
        }) .catch
        if (!mentionMember.kickable) return message.reply('I am unable to kick that user! *Sorry* ●.◉').then(message => {
            message.delete({timeout: 12500 })
        }) .catch

        try {
            await mentionMember.send(kickEmbed);
        } catch (err) {

        }

        try {
            await mentionMember.kick(reason);
            message.channel.send("Successfully kicked: " + mentionedMember.user.tag);
        } catch (err) {
            return message.channel.send("I Think i couldnt message the user!?&%£?...").then(message => {
                message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
            }) .catch
        }

    }
}