const Discord = require('discord.js')
const pp = require('../../assets/JSON/pps.json')

module.exports = {
    name: "pp",
    description: "pp size (rng)",

    async run (bot, message, args) {

        let member = message.mentions.users.first() || message.author

        let pps = pp;
        let rng = Math.floor((Math.random() * pps.length));


        const embed = new Discord.MessageEmbed()
        .setTitle(`${member.username}\`s PP Size`)
        .setDescription(pps[rng])
        .setColor(0x111111)

        message.channel.send(embed);
    }
}