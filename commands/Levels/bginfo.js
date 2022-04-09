const Discord = require('discord.js');

module.exports = {
    name: "bginfo",
    aliases: ['backgroundinfo', 'bg-info'],
    description: "dms user all backgrounds",

    async run (bot, message, args) {
        
        const embed = new Discord.MessageEmbed()
        .setTitle("Background info..")
        .setDescription("See all the backgrounds available (imgur link)")
        .addFields(
            {
                name: "baseplate",
                value: "https://i.imgur.com/l8sZwIZ.png",
            },
            {
                name: "cuwuc",
                value: "https://i.imgur.com/qZXUKOf.png",
            },
            {
                name: "forest",
                value: "https://i.imgur.com/RxiqLW0.png",
            },
            {
                name: "retrowave",
                value: "https://i.imgur.com/8oAzl0j.png",
            },
            {
                name: "metalix",
                value: "https://i.imgur.com/fHgakWh.png",
            },
            {
                name: "treeworld",
                value: "https://i.imgur.com/tpY5bDt.png",
            },
            {
                name: "colorsplat",
                value: "https://i.imgur.com/oF3hQro.png",
            },
            {
                name: "retrolazers",
                value: "https://i.imgur.com/RpwzsQc.png",
            },
        )
        
        
        message.author.send({embed}).catch(e =>{
            if (e) {
                message.reply(`Error. You seem to be locking your DMs so I'll send it here instead.`);
                message.channel.send({embed});
                return;
            } 
          });

          message.reply("Check your DMs!");  
    }
}