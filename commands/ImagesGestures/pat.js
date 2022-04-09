const Discord = require('discord.js');
const superagent = require('superagent');


module.exports = {
    name: "pat",
    description: "pat a MAN or woman. OR A BOT",

    async run (bot, message, args) {

        if (!message.mentions.users.first()) return message.reply("You need to mention someone to pat them :3");
        if (message.mentions.users.first().id === bot.user.id) return message.channel.send('yayyy!!');
        if (message.mentions.users.first().id === message.author.id) return message.channel.send('I see you\'re lonely,.. ***headpats you***.. you\'re welcome!');
        const { body } = await superagent
        .get("https://nekos.life/api/pat");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO ${message.mentions.users.first().username}, you got a head pat from ${message.author.username}!`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
}