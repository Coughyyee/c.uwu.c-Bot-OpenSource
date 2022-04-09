const Discord = require('discord.js')
const pink = require('../../assets/colors/pinks.json')
const uwu = require('../../assets/JSON/RUwus.json')

module.exports = {
    name: "ruwu",
    description: "Sends a random uwu in chat",

    async run (bot, message, args) {


        let pinks = pink;
        let pinksresult = Math.floor((Math.random() * pinks.length));


        let uwus = uwu;
        let uwuresult = Math.floor((Math.random() * uwus.length));

        let uwuembed = new Discord.MessageEmbed()
        .setColor(pinks[pinksresult])
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL())
        .addField('**Here is a Random `UwU`**:', uwus[uwuresult])


        message.channel.send(uwuembed)
    }
}