const Discord = require('discord.js');
const inventory = require('../../schema/inventory')
const items = require('../../models/shopitems')

module.exports = {
    name: "buy",
    description: "buy an item from the shop!",

    async run (bot, message, args) {
        if(!args[1]) return message.reply("Please specify a **valid** item to buy! >.......<")
        const itemToBuy = args[1].toLowerCase();

        const validItem = !!items.find((val) => val.item.toLowerCase() === itemToBuy);
        if(!validItem) return message.reply("The item you wanted is not valid!")

        const itemPrice = items.find((val) => (val.item.toLowerCase()) === itemToBuy).price;

        const userBalance = await bot.bal(message.author.id);
        if(userBalance < itemPrice) return message.reply(`You dont have enough coins to buy this!`)

        const params = {
            userId: message.author.id
        }
        inventory.findOne(params, async(err, data) => {
            if(data) {
                const hasItem = Object.keys(data.Inventory).includes(itemToBuy)
                if(!hasItem) {
                    data.Inventory[itemToBuy] = 1;
                } else {
                    data.Inventory[itemToBuy]++
                }
                //console.log(data);
                await inventory.findOneAndUpdate(params, data)
            } else {
                new inventory({
                    userId: message.author.id,
                    Inventory: {
                        [itemToBuy]: 1,
                    },
                }).save();
            }
            message.reply(`You have successfully bought ${itemToBuy}!`)
            bot.remove(message.author.id, itemPrice)
        })
    }
}