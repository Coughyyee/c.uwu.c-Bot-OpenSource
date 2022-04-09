const Discord = require('discord.js')
const reply8b = require('../../assets/JSON/8ball.json')

module.exports = {
    name: "8ball",
    aliases: ['8b'],
    description: "8 ball command",

    async run (bot, message, args) {

        if(!args[1]) return message.reply('Please ask a full question（｡ò ∀ ó｡）').then(message => {
            message.delete({ timeout: 10000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
        let replies = reply8b;

        let result = Math.floor((Math.random() * replies.length));
        let question = args.slice(1).join(" ");


        let ballembed = new Discord.MessageEmbed()
        .setAuthor(`🎱 ${message.author.username}`)
        .setColor("#1C1C1C")
        .addField("Question", question)
        .addField("Answer", replies[result]);

        message.channel.send(ballembed);
    }
}