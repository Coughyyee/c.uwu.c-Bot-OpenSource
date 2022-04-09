const db = require('../../schema/warns')


module.exports = {
    name: "remove-warn",
    aliases: ['removewarn'],
    description: "removes a warn",

    async run (bot, message, args) {

        if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply('You do not have the permissions to use that command!').then(message => {
            message.delete({ timeout: 25000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        const user = message.mentions.users.first() || message.guild.members.cache.get(args[0])
        if(!user) return message.reply('Please specify a **valid** user!')
        db.findOne({ guildId: message.guild.id, userId: user.id }, async(err, data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[2]) - 1
                data.content.splice(number, 1)
                message.channel.send('Deleted the Warn!').then(message => {
                    message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
                }) .catch
                data.save()
            } else {
                message.channel.send('This user does not have any warns in this server!!')
            }
        })
    }
}