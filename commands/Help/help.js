const Discord = require('discord.js')

module.exports = {
    name: "help",
    description: "Help Command, a list of all the commands",


    async run (bot, message, args) {

        const d = ':game_die:';
        const e = ':money_with_wings:';
        const c = ':stars:';
        const b = ':bowling:';

        const help = new Discord.MessageEmbed()
        .setColor(0x33FFE3)
        .setTitle('Prefix: `c.` ')
        .setAuthor('Commands List', bot.user.displayAvatarURL())
        .setDescription("❯Here is the Commands List!\n❯For Command Help/Usage, Use The `c.usage` command to see how to use each command!\n❯Invite Links: [My Invite Link](https://discord.com/oauth2/authorize?client_id=781683455024824340&scope=bot&permissions=2147478783) | [My Cafe Server / Support Server](https://discord.gg/jVP39rjeRx)")
    
        .addFields(
        {
            name: 'ℹ Information', //6
            value: '\`weather\` | \`ping\` | \`serverinfo\` | \`botinfo\` | \`userinfo\` | \`avatar\`',
        },
        {
            name: '🤗 Fun', //9
            value: '\`8ball\` | \`meme\` | \`howgay\` | \`ruwu\` | \`pp\` | \`fortune\` | \`say\` | \`urban\` | \`dadjoke\`',
        },
        {
            name: `${b} Games`, //5
            value: '\`rng\` | \`dice\` | \`coinflip\` | \`tictactoe\` | \`rps\`',
        },
        {
            name: `${d} Gambling`, //2
            value: '\`double-or-nothing\` | \`rob\`', 
        },
        {
            name: `${e} Economy`, //6
            value: '\`ballance\` | \`daily\` | \`work\` | \`shop\` | \`buy\` | \`inventory\`',
        },
        {
            name: `${c} Images/Gestures`, //10
            value: '\`cat\` | \`dog\` | \`feed\` | \`kiss\` | \`pat\` | \`shibe\` | \`slap\` | \`smug\` | \`tickle\` | \`kitsune\` ',
        },
        {
            name: '🎟 Moderation', //15
            value: '\`kick\` | \`ban\` | \`warn\` | \`total-warns\` | \`remove-warn\` | \`clear-warns\` | \`mute\` | \`unmute\` | \`addrole\` | \`removerole\` | \`nick\` | \`unnick\` | \`announce\` | \`purge\` | \`ascii\` ',
        },
        {
            name: '🎵 Music', //5
            value: '\`play\` | \`stop\` | \`skip\` | \`loop\` | \`queue\`',
        },
        {
            name: '🎉 Levels', //4
            value: '\`level\` | \`level-leaderboard\` | \`bgbuy\` | \`bginfo\`',
        },
        {
            name: '🗨 Other', //7
            value: '\`feedback\` | \`bug\` | \`invite\` | \`dm\` | \`dmtoggle\` | \`setwelcome\` | \`checkwelcome\`',
        },
        )
        .setFooter("Total Commands: 69")

         message.channel.send(help)

    }
}