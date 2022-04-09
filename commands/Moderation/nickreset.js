const Discord = require('discord.js')


module.exports = {
    name: "unnick",
    description: "clears a users nickname",

    async run (bot, message, args) {

        if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("You can't use this command! (⁎˃ᆺ˂)").then(message => {
            message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        const member = message.mentions.members.first();
        if(!member) return message.reply("Please specify a member you want to unnick!")

        try {
            member.setNickname(null)
        } catch (err) {
            message.reply("I do not have the permissions to unnick " + member.toString() + "!")
        }
    }
}