const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "dog",
    description: "sends dog pic",

    async run (bot, message, args) {
        const { body } = await superagent.get("https://random.dog/woof.json");
        link = body.url;
        

        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle("Here is Your Doggy!")
        .setImage(body.url) 

        message.channel.send({embed});
    }
}