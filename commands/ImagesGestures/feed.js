const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "feed",
    description: "feed some person",

    async run (bot, message, args) {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to feed them!");
        if (message.mentions.users.first().id == bot.user.id && message.author.id !== "253428233721217024") return message.channel.send("I don't eat tho")
        if (message.mentions.users.first().id == bot.user.id && message.author.id == "253428233721217024") return message.reply("Yessss, you know best my MaKeRr..")

        
        
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/feed");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.mentions.users.first().username}, you got fed by ${message.author.username}...`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
}