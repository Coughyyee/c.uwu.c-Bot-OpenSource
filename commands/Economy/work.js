const Discord = require('discord.js')

module.exports = {
    name: "work",
    cooldown: 1000 * 60 * 60 * 2,
    description: "work command, earn money",

    async run (bot, message, args) {

        const jobs = ['Programmer', 'Builder', 'Waiter', 'Chef', 'Doctor', 'Techer', 'FastFood Worker'];

        const jobIndex = Math.floor(Math.random() * jobs.length);
        const coins = Math.floor(Math.random() * 200) + 10;

        message.channel.send(`You have worked as a **${jobs[jobIndex]}** and earned **${coins}** coins!`)
        bot.add(message.author.id, coins)
    }
}