const Levels = require('discord-xp');
const Discord = require('discord.js');
const canvacord = require('canvacord');
const Schema = require('../../schema/background');

module.exports = {
    name: "level",
    aliases: ['lvl'],
    description: "shows ur level",

    async run(bot, message, args) {
        const target = message.mentions.users.first() || message.author;

        const user = await Levels.fetch(target.id, message.guild.id);
        if (!user) return message.channel.send("You do not have any xp nor levels...");

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        Schema.findOne({ userId: target.id }, async (err, data) => {
            let img = "https://i.imgur.com/l8sZwIZ.png";


            if (data) {
                const image = data.image;

                if (image == "baseplate") {
                    img = "https://i.imgur.com/l8sZwIZ.png";
                } else if (image == "forest") {
                    img = "https://i.imgur.com/RxiqLW0.png";
                } else if (image == "cuwuc") {
                    img = "https://i.imgur.com/qZXUKOf.png";
                } else if (image == "retrowave") {
                    img = "https://i.imgur.com/8oAzl0j.png";
                } else if (image == "metalix") {
                    img = "https://i.imgur.com/fHgakWh.png";
                } else if (image == "treeworld") {
                    img = "https://i.imgur.com/tpY5bDt.png";
                } else if (image == "colorsplat") {
                    img = "https://i.imgur.com/oF3hQro.png";
                } else if (image == "retrolazers") {
                    img = "https://i.imgur.com/RpwzsQc.png";
                }

            } else if (!data) {
                img = img;
            }


            const rank = new canvacord.Rank()
                .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png' }))
                .setBackground("IMAGE", img)
                .setCurrentXP(user.xp)
                .setRequiredXP(neededXp)
                .setStatus(target.presence.status)
                .setLevel(user.level)
                .setRank(1, 'RANK', false)
                .setOverlay("#636363")
                .setProgressBar("#F1AEF4", "COLOR")
                .setUsername(target.username)
                .setDiscriminator(target.discriminator);

            rank.build()
                .then(data => {
                    const attachment = new Discord.MessageAttachment(data, "RankCard.png");
                    try {
                        message.channel.send(attachment);
                    } catch (err) {
                        console.log(err);
                    }
                });

        })
    },
};