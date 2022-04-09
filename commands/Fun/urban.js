const urban = require('urban');
const Discord = require('discord.js');

module.exports = {
    name: "urban",
    description: "sends an urban story thing",

    async run (bot, message, args) {

        if (args.length < 1) {
            return message.reply('Please enter a word');
        }
        let word = args.slice(1).join(' ');

        urban(word).first(json => {
            if (!json) {
                return message.reply('No such word exist!');
            }
            let newstr = json.definition.match(/(.|[\r\n]){1,2040}/g);
            if (newstr.length >= 2){
                const def = new Discord.MessageEmbed()
                .setColor(0x111111)
                .setTitle(json.word)
                .setDescription(newstr[0] + '...')
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            message.channel.send(def);
            }else{
            const def = new Discord.MessageEmbed()
                .setColor(0x111111)
                .setTitle(json.word)
                .setDescription(json.definition)
                .addField('Upvotes', json.thumbs_up, true)
                .addField('Downvotes', json.thumbs_down, true)
                .setTimestamp(new Date())
                .setFooter(`Written by ${json.author}`);

            message.channel.send(def);
            }
        });
    }
    }

