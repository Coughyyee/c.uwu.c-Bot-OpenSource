const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
    name: "cat",
    description: "sends cat pic",

    async run (bot, message, args) {

        const { body } = await superagent.get("https://aws.random.cat/meow");


        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle("Here is Your Cat!")
        .setImage(body.file) 

        message.channel.send({embed});
    }
}