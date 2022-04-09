const Discord = require('discord.js')
const superagent = require('superagent')


module.exports = {
    name: "slap",
    description: "slap a hoe",

    async run (bot, message, args) {


        if (!message.mentions.users.first()) return message.reply("You need to mention someone to slap them!");
        if(message.mentions.users.first().id === "253428233721217024") return message.reply('You can\'t hurt him!');
        if (message.mentions.users.first().id == bot.user.id && message.author.id === "781683455024824340"){

        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/slap");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`No u! *slaps*${message.mentions.users.first().username}`)
        .setImage(body.url) 

        return message.channel.send({embed})
        }else if (message.mentions.users.first().id == bot.user.id && message.author.id !== "781683455024824340"){
        return message.channel.send("NUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU.... **ouch that hurt!**")
        }
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/slap");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, ${message.mentions.users.first().username} You got slapped by ${message.author.username}`)
        .setImage(body.url) 

        message.channel.send({embed})

    }
}