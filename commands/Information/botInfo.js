const Discord = require('discord.js');
const fs = require('fs');
const colorB = require('../../assets/colors/blues.json');
const settings = require('../../settings.json');
const { version } = require('../../settings.json');
const { prefix } = require('../../settings.json');

module.exports = {
    name: "botinfo",
    description: "Tell you bots development version",

    async run (bot, message, args) {

        const vers = version;

        let blues = colorB;
        let blueresult = Math.floor((Math.random() * blues.length));
    
          let globalprefix = settings.prefix;


            const embed = new Discord.MessageEmbed()
            .setColor(blues[blueresult])
            .setThumbnail(bot.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
            .setURL(bot.user.avatarURL({ format: 'png', dynamic: true, size: 2048 }))
            .setTimestamp()
            .addField("C.UwU.C by Coughyyee", "Bot's Info.")
            .addField("-------------------------------------------------------------------------------","----------------------------------------------------------------------------")
            .addField("Prefix", globalprefix, true)
            .addField("Total Server(s)", `${bot.guilds.cache.size}`, true)
            .addField("Total Channel(s)", `${bot.channels.cache.size}`, true)
            .addField("Total User(s)", `${bot.users.cache.size}`, true)
            .addField("Bot Version", vers, true)
            .addField("Library", "Discord.js v12", true)
            .addField("Developer", `${settings.developer}`, true)
            .addField("-------------------------------------------------------------------------------","----------------------------------------------------------------------------")
           
            message.channel.send({embed});
    }
}
