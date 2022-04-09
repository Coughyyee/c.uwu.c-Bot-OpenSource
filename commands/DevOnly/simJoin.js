const Discord = require('discord.js');

module.exports = {
    name: "simjoin",
    description: "sim joins",

    async run (bot, message, args, text) {
        if(message.author.id != "253428233721217024") return;
        bot.emit('guildMemberAdd', message.member)
    },
}