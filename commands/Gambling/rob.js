const Discord = require('discord.js');

module.exports = {
    name: "rob",
    cooldown: 1000 * 60 * 60, //1hour
    description: "try rob someone",

    async run (bot, message, args) {

        const coins = Math.floor(Math.random() * 1515) + 510;

        const tryrob = message.mentions.users.first();
        if(!tryrob) return message.reply("Please mentions someone you would like to rob!!")

        if(await bot.bal(message.author.id) < 2025) return message.reply('You dont have enough balance to try to rob someone!')


        function random() {
            const num = Math.floor(Math.random() * 3);
            return num === 1;
        };

        const robAmount = coins;
        if(random() === true) {
            message.channel.send(`Hahahaha!! You just robbed ${tryrob} without getting caught!`);
            bot.add(message.author.id, robAmount)
            bot.remove(tryrob.id, robAmount)

        } else {
            message.channel.send(`OH NO! You Got Caught By The Police! You lost: ${robAmount}`)
            bot.remove(message.author.id, robAmount)
        }
    }
}