const Discord = require('discord.js')

module.exports = {
    name: "addbal",
    description: "adds balance",

    async run (bot, message, args) {

        if(message.author.id != "253428233721217024") return;

        const member = message.mentions.members.first();
        if(!member) return message.channel.send("Please specify a user to add ballance into thier wallet!\n`Usage: c.addbal @<user> <num.>`")

        const argss = args[2];
        if(isNaN(argss)) {
            return message.channel.send("Please provide a **valid** numeric value!\n`Usage: c.addbal @<user> <num.>`")
        }

        bot.add(member.id, parseInt(argss));

        message.reply(`Added Balance to ${member}'s Wallet!`)
    }
}