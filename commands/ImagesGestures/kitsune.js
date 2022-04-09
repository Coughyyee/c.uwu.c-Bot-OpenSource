const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "kitsune",
    description: ".....",

    async run (bot, message, args) {
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/fox_girl");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`OwO, Here's your Fox Girl`)
        .setImage(body.url) 
        message.channel.send({embed})
    }
}