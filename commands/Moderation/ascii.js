const figlet = require('figlet');


module.exports = {
    name: "ascii",
    description: "Converts text to ascii",

    async run (bot, message, args){
   

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`You do not have the permission to use that! (C_C)`).then(message => {
            message.delete({ timeout: 5000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch
        if(!message.guild.me.hasPermission("ADMINISTRATOR")) return message.reply(`I do not have the right permissions ( •᷄ὤ•᷅)？`);

        if(!args[1]) return message.reply(`Please provide some text (ᗒᗣᗕ)՞`).then(message => {
            message.delete({ timeout: 5000 }) //<-- time to auto delete message (in 'ms' (1000ms = 1sec))
        }) .catch

        msg = args.slice(1).join(" ");

        figlet.text(msg, function (err, data){
            if(err){
                console.log('Something went wrong');
                console.dir(err);
            }
            if(data.length > 2000) return message.reply('Please provide text shorter than 2000 characters ( ͒˃⌂˂ ͒)')

            message.channel.send('```' + data + '```')
        })
    }
}