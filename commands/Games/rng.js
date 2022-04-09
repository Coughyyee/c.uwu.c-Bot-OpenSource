const Discord = require('discord.js')

module.exports = {
    name: "rng",
    description: "random number genarator",

    async run (bot, message, args) {
        
        if (!args.length || !args[1]) {
            message.reply("You need to specify the max value! \`e.g: c.rng 10\` (o^∀^o) ")
        } else {
            let max = args[1]
            let min = args[2]

            let randNo = Math.round(Math.random() * max)

            const embed = new Discord.MessageEmbed()
            .setTitle("Your random number is: ")
            .setDescription(randNo)
            .setColor("RANDOM")
            .setTimestamp()

            message.reply(embed).then(message => {
                message.delete({ timeout: 25000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
            }) .catch
        }

    }
}