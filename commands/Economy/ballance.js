const Discord = require('discord.js')

module.exports = {
    name: "ballance",
    aliases: ['bal', 'wallet'],
    description: "check your wallet",

    async run (bot, message, args) {

        const w = ":purse:";
        let member = message.mentions.members.first();
        if(!member) member = message.member;

        if(member.id === "253428233721217024") {
            message.channel.send(`${w} | ${member.user.username} You Currently Have ` + 'inf.' + " Coins in your Wallet!");

            return;
        }

        
        const wal = await bot.bal(member.id);
        if(member.id === message.member.id) {
            if(wal < 0) {
                message.channel.send(`${w} | ${member.user.username} You Currently Have ` + wal + " Coins... YOU'RE IN DEPT!");
            } else {
                message.channel.send(`${w} | ${member.user.username} You Currently Have ` + wal + " Coins in your Wallet!");
            } 
        } else {
            if(wal < 0) {
                message.channel.send(`${w} | ${member.user.username} Currently Has ` + wal + " Coins... YOU'RE IN DEPT!");
            } else {
                message.channel.send(`${w} | ${member.user.username} Currently Has ` + wal + " Coins in your Wallet!");
            } 
        }
    }
}