module.exports = {
    name: "say",
    description: "say command, make the bot say something",

    async run (bot, message, args) {


        let msg;

        if(message.content.toLowerCase().includes("im stupid")) return message.reply("We know")

        if(!message.content.toLowerCase().includes("im stupid")) {
        
        message.delete()

        msg = args.slice(1).join(" ");
        message.channel.send(msg)
        
    }
    }
}