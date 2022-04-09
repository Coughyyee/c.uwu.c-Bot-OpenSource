const Discord = require('discord.js');
const superagent = require('superagent');


module.exports = {
    name: "tickle",
    description: "tickle tickle",

    async run (bot, message, args) {
        if (!message.mentions.users.first()) return message.reply("You need to mention someone to tickle!");
        if(message.mentions.users.first().id === "253428233721217024") return message.reply('You can\'t tickle him. He will explode on impact! and then.... i\'ll die.. NEVER!');
        if (message.mentions.users.first().id == bot.user.id) return message.channel.send("Nuuuuuuuuuuuuuuuuuuuuuu that tickless!!")
        const { body } = await superagent
        .get("https://nekos.life/api/v2/img/tickle");
        
        const embed = new Discord.MessageEmbed()
        .setColor("#ff9900")
        .setTitle(`${message.mentions.users.first().username}, you got tickled by ${message.author.username}`)
        .setImage(body.url)

        message.channel.send({embed})
    }
}