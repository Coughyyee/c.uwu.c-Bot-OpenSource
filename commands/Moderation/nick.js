const Discord = require('discord.js')


module.exports = {
    name: "nick",
    description: "sets a custom nickname on a specified user",

    async run (bot, message, args) {


        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You can't use this command! (⁎˃ᆺ˂)").then(message => {
            message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        const member = message.mentions.members.first();
        if(!member) return message.reply("Please specify a member you want to set the nickname to!")

        const nickname = args.slice(2).join(" ");
        if(!nickname) return message.reply("Please specify a nick name you want to set!")

        try {
            member.setNickname(nickname)
        } catch (err) {
            message.reply("I do not have the permissions to set " + member.toString() + "'s nickname!")
        }
    }
}