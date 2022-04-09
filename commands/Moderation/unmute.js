const Discord = require('discord.js');
const Schema = require('../../schema/mute');

module.exports = {
    name: "unmute",
    description: "unmute a child",

    async run (bot, message, args) {
        const Member = message.mentions.members.first();

        if(!Member) return message.channel.send('Member not found')

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        Schema.findOne({ guildId: message.guild.id, userId: Member }, async (err, data) => {

            if(!data) return message.reply("Member is not muted!");
            const user = data.userId.findIndex((prop) => prop === Member.id);
            if(user == -1) return message.reply('Member is not muted!');
            data.userId.splice(user, 1);
            await Member.roles.remove(role)
            message.channel.send(`${Member.displayName} is now unmuted`)
        });
    }
}