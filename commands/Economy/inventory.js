const Discord = require('discord.js')
const inventory = require('../../schema/inventory')

module.exports = {
    name: "inventory",
    aliases: ['inv'],
    description: "see your inventory",

    async run (bot, message, args) {
        const p = ':package:';

        inventory.findOne({ userId: message.author.id }, async(err, data) => {

            if(!data) return message.reply("There is nothing inside of your inventory! 0.o").then((message) => {
                message.delete({ timeout: 17500 });
            }).catch
            
            const mappedData = Object.keys(data.Inventory).map((key) => {return `\n\`${data.Inventory[key]}\` ${key}`}).join(", ")

            let embed = new Discord.MessageEmbed()
            .setColor("WHITE")
            .setTitle(`${p} ${message.author.username}'s Inventory!`)
            .setDescription(mappedData)

            message.channel.send(embed)
        })
    }
}