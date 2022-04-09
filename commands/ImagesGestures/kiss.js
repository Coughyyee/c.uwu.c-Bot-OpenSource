const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "kiss",
    description: "kiss someone",

    async run (bot, message, args) {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to kiss them :3");
        if (message.mentions.users.first().id == bot.user.id && message.author.id !== "253428233721217024") return message.reply("No kissing unless you're my Dev :<")
        if (message.mentions.users.first().id == message.author.id) return message.reply("hmm, seems a bit impossible, sorry**")
        if (message.mentions.users.first().id == bot.user.id && message.author.id == "253428233721217024") return message.reply(">////<")
        const { body } = await superagent
        .get("https://nekos.life/api/kiss");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.author.username} kissed ${message.mentions.users.first().username} :3`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
}