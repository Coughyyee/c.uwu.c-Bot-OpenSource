const { tictactoe } = require('reconlx')

module.exports = {
    name: "tictactoe",
    description: "tictactoe against other users",

    async run (bot, message, args) {

        const member = message.mentions.members.first()
            if(!member) return message.reply('Please specify a user to play against (︶ω︶)').then(message => {
                message.delete({ timeout: 14500 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
            }) .catch

        new tictactoe({
            player_two: member,
            message: message
        })
    }
}