module.exports = {
    name: "purge",
    description: "Clears messages.",

    async run (bot, message, args) {


        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send('You do not have the permissions to use that command!').then(message => {
            message.delete({ timeout: 25000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch


        message.delete()

        
        const amount = args.slice(1).join(" ");

        if(!amount) return message.reply('please provide an amount of messages to delete (¬д¬。)').then(message => {
            message.delete({ timeout: 10000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        if(amount > 75) return message.reply(`you cannot clear more than 75 messages (*≧m≦*)`).then(message => {
            message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        if(amount < 1) return message.reply(`you need to delete at least one message (。ヘ°)`).then(message => {
            message.delete({ timeout: 15000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages)
        })

        message.channel.send('**Messages Purged!** (~￣▽￣)~').then(message => {
            message.delete({ timeout: 7500 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
    }
}