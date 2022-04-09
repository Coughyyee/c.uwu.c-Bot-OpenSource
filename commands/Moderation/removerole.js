const settings = require('../../settings.json')



module.exports = {
    name: "removerole",
    description: "Removes a role from a specified user.",

    async run (bot, message, args) {

        if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.reply("I don't have the **Manage Roles** permission!");
        if (message.mentions.users.size === 0) return message.reply("Please mention a user to remove the role from.\nExample: `removerole @user Members`").then(message => {
            message.delete({timeout: 20000})
        }).catch
        let member = message.guild.member(message.mentions.users.first());
        if (!member) return message.reply("That user does not seem valid.");
        let rname = message.content.split(" ").splice(2).join(" ");
        let role = message.guild.roles.cache.find(val => val.name === rname);
        if (!role) return message.reply(`${rname} isn't a role on this server!`);
        let botRolePosition = message.guild.member(bot.user).roles.highest.position;
        let rolePosition = role.position;
        let userRolePossition = message.member.roles.highest.position;
        if (userRolePossition <= rolePosition) return message.channel.send("Failed to remove the role from the user because your role is lower than the specified role.")
        if (botRolePosition <= rolePosition) return message.channel.send("Failed to remove the role from the user because my highest role is lower than the specified role.");
        member.roles.remove(role).catch(e => {
            return message.channel.send(`**Error:**\n${e}`);
        });
        message.channel.send(`**${message.author.username}**, I've removed the **${rname}** role from **${message.mentions.users.first().username}**.`).then(message => {
            message.delete({timeout: 60000})
        }).catch
    }
}