const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "userinfo",
    description: "user information display command",

    async run (bot, message, args) {

        let user = message.mentions.members.first() || message.member;

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username}'s info`)
            .setColor(`#f3f3f3`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .addFields(
                {
                    name: "Name: ",
                    value: user.user.username,
                    inline: true
                },
                {
                    name: "Discriminator: ",
                    value: `#${user.user.discriminator}`,
                    inline: true
                },
                {
                    name: "User ID: ",
                    value: user.user.id,
                },
                {
                    name: 'Avatar link: ',
                    value: `[Click Here](${user.user.displayAvatarURL()})`
                },
                {
                    name: 'Creation Date: ',
                    value: user.user.createdAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'Joined Date: ',
                    value: user.joinedAt.toLocaleDateString("en-us"),
                    inline: true
                },
                {
                    name: 'User Roles: ',
                    value: user.roles.cache.map(role => role.toString()).join(" ,"),
                    inline: true
                }
            )
            .setFooter("Requested by: "+message.author.username+'#'+message.author.discriminator, message.author.displayAvatarURL(), )

        await message.channel.send(embed)
    }
}