const Discord = require('discord.js');
const Schema = require('../../schema/mute');

module.exports = {
    name: "mute",
    description: "mutes someone mkay",

    async run (bot, message, args) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do not have the permissions to use this command!")
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[1]);
        if(!Member) return message.reply("Please specify a member you would like to mute!")
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Unnable to find muted role! Attempting to create a **muted** role now!')

                let muterole = await message.guild.roles.create({
                    data: {
                        name: "muted",
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === "text").forEach(async (channel,id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(`Muted role has been created!`)
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        Schema.findOne({ guildId: message.guild.id }, async (err, data) => {
            if(!data) {
                new Schema({
                    guildId: message.guild.id,
                    userId: Member.Id
                }).save();
            } else {
                data.userId.push(Member.id);
                data.save();
            }
        });
        message.channel.send(`${Member.displayName} is now muted.`)
    }
}