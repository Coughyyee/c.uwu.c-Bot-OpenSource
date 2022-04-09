const Discord = require('discord.js')

module.exports = {
    name: "removebal",
    description: "removes balance",

    async run (bot, message, args) {

        if(message.author.id != "253428233721217024") return;

        const member = message.mentions.members.first();
        if(!member) return message.channel.send("Please specify a user to remove ballance from thier wallet!\n`Usage: c.removebal @<user> <num.>`")

        const argss =  parseInt(args[2]);
        if(isNaN(argss)) {
            //console.log(argss)
            return message.channel.send("Please provide a **valid** numeric value!\n`Usage: c.removebal @<user> <num.>`")
        }

        bot.remove(member.id, argss);

        message.reply(`Removed Ballance from ${member}'s Wallet..`)
    }
}