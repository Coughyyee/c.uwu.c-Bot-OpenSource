const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "shop",
    aliases: ['store'],
    description: "shopp....",

    async run(bot, message, args) {

        const t = ':shopping_cart:';
        const c = ':coin:';

        
        //-----------------------------------------------------
        if (args[1] === "backgrounds" || args[1] === "background" || args[1] === "bgs" || args[1] === "bgs" || args[1] === "bg") {
            let bgembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Backgrounds `)
                .addField("|Page 1|", `📉\`baseplate----------------0\`${c}
                          😅\`cuwuc----------------10000\`${c}
                          🌲\`forest---------------10000\`${c}
                          🚦\`retrowave------------10000\`${c}
                          🖤\`metalix--------------10000\`${c}
                          🎄\`treeworld------------10000\`${c}`)


            let bgembed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Backgrounds `)
                .addField("|Page 2|", `📉\`colorsplat-----------10000\`${c}
                          🤍\`retrolazers----------10000\`${c}`)


            const pages = [
                bgembed,
                bgembed2
            ]

            const emojiList = ["⏪", "⏩"]

            const timeout = '600000';

            pagination(message, pages, emojiList, timeout)


            return;
        }


        //-----------------------------------------------------
        if (args[1] === "fruits" || args[1] === "fruit") {
            let fembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Fruits `)
                .addField("|Aisle 1|", `🍌\`banana---------------550\`${c}
                                  🍎\`apple----------------550\`${c}
                                  🍓\`strawberry-----------580\`${c}
                                  🍊\`orange---------------700\`${c}
                                  🍇\`grape----------------800\`${c}
                                  🥝\`kiwi-----------------800\`${c}`)

            let fembed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Fruits `)
                .addField("|Aisle 2|", `🥭\`mango----------------900\`${c}
                                 🍐\`pear-----------------920\`${c}
                                 🍉\`watermelon----------1000\`${c}
                                 🍈\`melon---------------1000\`${c}`)

            const pages = [
                fembed,
                fembed2
            ]

            const emojiList = ["⏪", "⏩"]

            const timeout = '600000';

            pagination(message, pages, emojiList, timeout)


            return;
        }





        //-----------------------------------------------------
        if (args[1] === "vegetables" || args[1] === "vegetable" || args[1] === "vege") {
            let vembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Vegetables `)
                .addField("|Aisle 1|", `🍅\`tomato----------------1300\`${c}
                                  🥒\`cucumber--------------1350\`${c}
                                  🥔\`potato----------------1400\`${c}
                                  🍄\`mushroom--------------1400\`${c}
                                  🥕\`carrots---------------1450\`${c}
                                  🥬\`lettuce---------------1450\`${c}`)

            let vembed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Vegetables `)
                .addField("|Aisle 2|", `🌶\`peper-----------------1450\`${c}
                                 🥦\`broccoli--------------1450\`${c}
                                 🍆\`eggPlant--------------1500\`${c}
                                 🌽\`corn------------------1500\`${c}
                                 🧅\`onion-----------------1500\`${c}`)

            const pages = [
                vembed,
                vembed2
            ]

            const emojiList = ["⏪", "⏩"]

            const timeout = '600000';

            pagination(message, pages, emojiList, timeout)


            return;
        }





        //-----------------------------------------------------
        if (args[1] === "drinks" || args[1] === "drink") {
            const d = ':champagne:';

            let dembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Drinks `)
                .addField("|Aisle 1|", `🍸\`coca-cola------------1200\`${c}
                                   ${d}\`pepsi----------------1200\`${c}
                                     🍸\`sprite---------------1200\`${c}
                                   ${d}\`water----------------1400\`${c}
                                     🍸\`monster--------------1400\`${c}
                                   ${d}\`boost----------------1400\`${c}`)

            let dembed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Drinks `)
                .addField("|Aisle 2|", `🍸\`redbull--------------1420\`${c}
                                 ${d}\`iron-bru-------------1420\`${c}
                                   🍸\`apple-juice----------1500\`${c}
                                 ${d}\`orange-juice---------1500\`${c}
                                   🍸\`carrot-juice---------1500\`${c}
                                 ${d}\`strawberry-juice-----1600\`${c}`)

            let dembed3 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Drinks `)
                .addField("|Aisle 3|", `🍸\`champain-------------2500\`${c}
                                 ${d}\`white-wine-----------2500\`${c}
                                   🍸\`red-wine-------------2500\`${c}`)

            const pages = [
                dembed,
                dembed2,
                dembed3
            ]

            const emojiList = ["⏪", "⏩"]

            const timeout = '600000';

            pagination(message, pages, emojiList, timeout)


            return;
        }

        //-----------------------------------------------------
        if (args[1] === "fast-foods" || args[1] === "fast-food" || args[1] === "fastfood" || args[1] === "fastfoods") {

            let fembed = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Fast-Foods `)
                .addField("|Aisle 1|", `🍔\`cheese-burger----------2000\`${c}
                                    🍔\`vegan-burger-----------2200\`${c}
                                    🌯\`medium-sub-------------2500\`${c}
                                    🌯\`meatball-sub-----------2650\`${c}
                                    🌯\`vegan-sub--------------2650\`${c}
                                    🍕\`pizza------------------2750\`${c}`)

            let fembed2 = new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(`${t} C.UwU.C Shop | Fast-Foods `)
                .addField("|Aisle 2|", `🍕\`vegeterian-pizza------2800\`${c}
                                    🐟\`fish-and-chips--------2220\`${c}`)

            const pages = [
                fembed,
                fembed2
            ]

            const emojiList = ["⏪", "⏩"]

            const timeout = '600000';

            pagination(message, pages, emojiList, timeout)


            return;
        }

        if (args[1] === "crypto" || args[1] === "crypto-currency") {

            let cembed = new Discord.MessageEmbed()
                .setColor("BLACK")
                .setTitle(`W3lc0me tO th3 Cr7pt0 5hOp...`)
                .addField(`${c} BitCoin`, '`Price: 354680`')

            message.channel.send(cembed)

            return;
        }



        const embed = new Discord.MessageEmbed()
            .setColor("BLUE")
            .setTitle(`${t} Welcome to The C.UwU.C Shop!`)
            .setDescription("Please type the store section you would like to visit!")
            .addFields(
                {
                    name: "Backgrounds",
                    value: "`c.shop backgrounds`",
                    inline: true,
                },
                {
                    name: "Fruits",
                    value: "`c.shop fruits`",
                    inline: true,
                },
                {
                    name: "Vegetables",
                    value: "`c.shop vegetable`",
                    inline: true,
                },
                {
                    name: "Drinks",
                    value: "`c.shop drinks`",
                    inline: true,
                },
                {
                    name: "Fast-Foods",
                    value: "`c.fast-foods`",
                    inline: true,
                },
                {
                    name: "CryptoCurrency..",
                    value: "`c.shop crypto`",
                    inline: true,
                },
            )

        message.channel.send(embed)
    }
}