const { e } = require("mathjs");


module.exports = {
    name: "announce",
    description: "announce command, make the bot say something",

    async run (bot, message, args) {

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have the permissions to use that command!').then(message => {
            message.delete({ timeout: 25000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
        
        let msg = args.slice(2).join(" ");
        if(!msg) return message.reply("Please add a message to announce!")
        let textChannel = message.mentions.channels.first()
        if(!textChannel) return message.reply("Please specify a **valid** channel!")
        
        message.delete()

        textChannel.send("@everyone , " + msg)
    }
}
