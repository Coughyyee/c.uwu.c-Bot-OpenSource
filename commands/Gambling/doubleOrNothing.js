const Discord = require('discord.js');

module.exports = {
    name: "double-or-nothing",
    aliases: ['don', 'd-o-n'],
    cooldown: 1000 * 7.5,
    description: "double or nothing, involving coins",

    async run (bot, message, args) {

        if(!args[1]) return message.reply('Please specify an amount you want to gamble with!')

        if(isNaN(args[1])) return message.reply('The amount has to be an NumBeRRr!!')

        const amountToBet = parseInt(args[1]);

        if(await bot.bal(message.author.id) < amountToBet) return message.reply('You have insufficient balance!')

        function random() {
            const num = Math.floor(Math.random() * 2);
            return num === 1;
        };

        if(random() === true) {
            const winAmount = amountToBet * 2;
            message.channel.send(`Congrats ${message.author}! You won ${winAmount} coins!`);
            bot.add(message.author.id, winAmount)
        } else {
            message.channel.send(`Aww, you unfortunetally lost ${amountToBet} coins..`)
            bot.remove(message.author.id, amountToBet)
        }
    }
}


