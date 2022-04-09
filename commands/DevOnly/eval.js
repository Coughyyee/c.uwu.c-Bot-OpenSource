const Discord = require('discord.js')
const { inspect } = require("util")

module.exports = {
    name: "eval",
    description: "eval command, **Developer only**",

    async run (bot, message, args) {
        if(message.author.id != "253428233721217024") return;

        const code = args.join(" ");
        if(!code) return message.reply("Please provide some code to evaluate daddy..")

        try {
            const result = await eval(code);
            let output = result;
            if(typeof result !== "string") {
                output = inspect(result);
            }

            message.channel.send(output, { code: "js" });
        } catch (err) {
            console.log(err)
            message.channel.send("An Error Occured Trying to Evaluate.!^$£$,")
        }
    },
};