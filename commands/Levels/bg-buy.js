const Discord = require('discord.js');
const Schema = require('../../schema/background');
const items = require('../../models/bg-items');

module.exports = {
    name: "bgbuy",
    aliases: ['bg-buy', 'buybg', 'backgroundbuy'],
    description: "buy a bg",

    async run (bot, message, args) {
        if(!args[1]) return message.reply("Please specify a **valid** item to buy! >.......<");
        const itemToBuy = args[1].toLowerCase();

        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if(!validItem) return message.reply("The item you wanted is not valid!");

        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price;

        const userBalance = await bot.bal(message.author.id);
        if(userBalance < itemPrice) return message.reply(`You dont have enough coins to buy this!`);
    

        Schema.findOne({ userId: message.author.id }, async (err, data) => {
            if(data) {
                data.image = itemToBuy;
                data.save();
            } else {
                new Schema({
                    userId: message.author.id,
                    image: itemToBuy,
                }).save();
            }

            message.reply(`You have successfully bought the **${itemToBuy}** Background!`)
            bot.remove(message.author.id, itemPrice)
        })
    }
}