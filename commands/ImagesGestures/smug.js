const Discord = require('discord.js');
const superagent = require('superagent');


module.exports = {
    name: "smug",
    description: "smugs",

    async run (bot, message, args) {
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/smug");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setImage(body.url) 
        message.channel.send({embed})
    }
}