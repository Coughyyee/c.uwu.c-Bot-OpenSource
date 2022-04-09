const chalk = require('chalk');
const Discord = require('discord.js');
const settings = require('../settings.json');

module.exports = bot => {
    console.log(chalk.yellowBright.black('C.UwU.C is Live! ** Version: ' + settings.version))
    console.log(chalk.bgWhite.black("Developer(s): "+ settings.developer))
    console.log(chalk.bgWhite.black("Total Channels: "+ bot.channels.cache.size))
    console.log(chalk.bgWhite.black("Total Users: "+ bot.users.cache.size))
    console.log(chalk.bgWhite.black("Total Servers: "+ bot.guilds.cache.size))
    console.log(chalk.bgWhite.black("Library: Discord.js v12"))

    //bot.user.setActivity(`Over ${bot.guilds.cache.size} Servers!`, { type: "WATCHING"}).catch(console.error) //bot activity
    const arrayOfStatus = [
        `Over ${bot.guilds.cache.size} servers!`,
        `Prefix is \`c.\``
    ];

    let index = 0;
    setInterval(() => {
        if (index === arrayOfStatus.length) index = 0;
        const status = arrayOfStatus[index];

        //console.log(status);

        bot.user.setActivity(status, { type: "WATCHING"}).catch(console.error)
        index++;
    }, 10000); //in ms

};