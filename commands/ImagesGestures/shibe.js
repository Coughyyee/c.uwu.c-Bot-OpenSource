const Discord = require('discord.js');
const superagent = require('superagent');


module.exports = {
    name: "shibe",
    description: "sends a randome shibe",

    async run (bot, message, args) {

        const { body } = await superagent
        .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true`)
      
        const embed = new Discord.MessageEmbed()
          .setColor("#ff9900")
          .setTitle("Here's Your Shibe")
          .setImage(body[0]) 
          message.channel.send({embed});
    }
}