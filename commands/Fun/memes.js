const randomPuppy = require('random-puppy');
const Discord = require('discord.js');

module.exports = {
    name: "meme",
    description: "Gives you a random meme",

    async run (bot, message, args){

        const subReddits = ["funny", "meme", "memes", "surrealmemes", "me_irl"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]

        const img = await randomPuppy(random);

        const embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setImage(img)
        .setTitle(`Your **meme** has been granted. All the way from r/${random}`)
        .setURL(`https://reddit.com/r/${random}`)

        message.channel.send(embed).then(message => {
            message.delete({ timeout: 30000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
    }
}