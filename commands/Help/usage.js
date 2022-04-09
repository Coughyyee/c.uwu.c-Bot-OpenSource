const Discord = require('discord.js');
const pagination = require('discord.js-pagination');

module.exports = {
    name: "usage",
    description: "usage cmd",

    async run (bot, message, args) {
        let embed = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle(`The Usage Locker.. / Pg0`)
        .setDescription("How To Use")
        .addField("Description", "Shows you how to **properly use each command**! Also shows the commands **Aliases** and **Cooldowns**")
        .addField("Pages", "**Pg0 - How To Use** | **Pg1 - Information** | **Pg2 - Fun** | **Pg3 - Games** | **Pg4 - Gambling** | **Pg5 - Economy** | **Pg6 - Images/Gestures** | **Pg7 & Pg8 - Moderation** | **Pg9 - Music** | **Pg10 - Levels** | **Pg11 - Other**")
        .addField("Navigation", "Use the Reaction Arrows Below To Scroll Through Pages!")
        
        // | `Aliases: none` | `Cooldown: none`

        let embed1 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle(`The Usage Locker.. / Pg1`)
        .setDescription("Information")
        .addField("weather", "`c.weather <location>` | `Aliases: none` | `Cooldown: none`")
        .addField("ping", "`c.ping` | `Aliases: none` | `Cooldown: none`")
        .addField("serverinfo", "`c.serverinfo` | `Aliases: none` | `Cooldown: none`")
        .addField("botinfo", "`c.botinfo` | `Aliases: none` | `Cooldown: none`")
        .addField("userinfo", "`c.userinfo @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("avatar", "`c.avatar @<user>` | `Aliases: av, pfp, icon` | `Cooldown: none`")

        let embed2 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg2")
        .setDescription("Fun")
        .addField("8ball", "`c.8ball <question>` | `Aliases: 8b` | `Cooldown: none`")
        .addField("meme", "`c.meme` | `Aliases: none` | `Cooldown: none`")
        .addField("howgay", "`c.howgay @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("ruwu", "`c.ruwu` | `Aliases: none` | `Cooldown: none`")
        .addField("pp", "`c.pp @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("fortune", "`c.fortune` | `Aliases: none` | `Cooldown: none`")
        .addField("say", "`c.say <text>` | `Aliases: none` | `Cooldown: none`")
        .addField("urban", "`c.urban <subject>` | `Aliases: none` | `Cooldown: none`")
        .addField("dadjoke", "`c.dadjoke` | `Aliases: none` | `Cooldown: none`")
        
        let embed3 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg3")
        .setDescription("Games")
        .addField("rng", "`c.rng <max value>` | `Aliases: none` | `Cooldown: none`")
        .addField("dice", "`c.dice` | `Aliases: none` | `Cooldown: none`")
        .addField("coinflip", "`c.coinflip` | `Aliases: none` | `Cooldown: none`")
        .addField("tictactoe", "`c.tictactoe @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("rps", "`c.rps` | `Aliases: none` | `Cooldown: none`")

        let embed4 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg4")
        .setDescription("Gambling")
        .addField("double-or-nothing", "`c.double-or-nothing <coins amount>` | `Aliases: don, d-o-n` | `Cooldown: 7.5 Seconds`")
        .addField("rob", "`c.rob @<user>` | `Aliases: none` | `Cooldown: 1 Hour`")

        let embed5 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg5")
        .setDescription("Economy")
        .addField("ballance", "`c.ballance` | `Aliases: bal, wallet` | `Cooldown: none`")
        .addField("daily", "`c.daily` | `Aliases: none` | `Cooldown: 24 Hours`")
        .addField("work", "`c.work` | `Aliases: none` | `Cooldown: 2 Hours`")
        .addField("shop", "`c.shop` | `Aliases: store` | `Cooldown: none`")
        .addField("buy", "`c.buy` | `Aliases: none` | `Cooldown: none`")
        .addField("inventory", "`c.inventory` | `Aliases: inv` | `Cooldown: none`")

        let embed6 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg6")
        .setDescription("Images/Gestures")
        .addField("cat", "`c.cat` | `Aliases: none` | `Cooldown: none`")
        .addField("dog", "`c.dog` | `Aliases: none` | `Cooldown: none`")
        .addField("feed", "`c.feed @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("kiss", "`c.kiss @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("pat", "`c.pat @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("shibe", "`c.shibe` | `Aliases: none` | `Cooldown: none`")
        .addField("slap", "`c.slap @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("smug", "`c.smug` | `Aliases: none` | `Cooldown: none`")
        .addField("tickle", "`c.tickle @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("kitsune", "`c.kitsune` | `Aliases: none` | `Cooldown: none`")

        let embed7 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg7")
        .setDescription("Moderation / 1")
        .addField("kick", "`c.kick @<user> | `Aliases: none` | `Cooldown: none``")
        .addField("ban", "`c.ban @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("warn", "`c.warn @<user> <reason>` | `Aliases: none` | `Cooldown: none`")
        .addField("total-warns", "`c.total-warns @<user>` | `Aliases: totalwarns, warns, warnstotal` | `Cooldown: none`")
        .addField("remove-warn", "`c.remove-warn @<user> <warn>` | `Aliases: removewarn` | `Cooldown: none`")
        .addField("clear-warns", "`c.clear-warns @<user>` | `Aliases: clearwarns` | `Cooldown: none`")
        .addField("mute", "`c.mute @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("unmute", "`c.unnmute @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("addrole", "`c.addrole @<user><role>` | `Aliases: none` | `Cooldown: none`")
        .addField("removerole", "`c.removerole @<user><role>` | `Aliases: none` | `Cooldown: none`")

        let embed8 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg8")
        .setDescription("Moderation / 2")
        .addField("nick", "`c.nick @<user> <nickname>` | `Aliases: none` | `Cooldown: none`")
        .addField("unnick", "`c.unnick @<user>` | `Aliases: none` | `Cooldown: none`")
        .addField("announce", "`c.announce #<channel> <msg>` | `Aliases: none` | `Cooldown: none`")
        .addField("purge", "`c.purge <amount>` | `Aliases: none` | `Cooldown: none`")
        .addField("ascii", "`c.ascii <msg>` | `Aliases: none` | `Cooldown: none`")

        let embed9 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg9")
        .setDescription("Music")
        .addField("play", "`c.play` | `Aliases: p` | `Cooldown: none`")
        .addField("stop", "`c.stop` | `Aliases: s` | `Cooldown: none`")
        .addField("skip", "`c.skip` | `Aliases: none` | `Cooldown: none`")
        .addField("loop", "`c.loop` | `Aliases: repeat, r, l` | `Cooldown: none`")
        .addField("queue", "`c.queue` | `Aliases: q` | `Cooldown: none`")

        let embed10 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg10")
        .setDescription("Levels")
        .addField("level", "`c.level @<user>` | `Aliases: lvl` | `Cooldown: none`")
        .addField("level-leaderboard", "`c.level-leaderboard` | `Aliases: llb, l-lb` | `Cooldown: 10 Seconds`")
        .addField("bgbuy", "`c.bgbuy <background>` | `Aliases: bg-buy, buybg, backgroundbuy` | `Cooldown: none`")
        .addField("bginfo", "`c.bginfo` | `Aliases: backgroundinfo, bg-info` | `Cooldown: none`")

        let embed11 = new Discord.MessageEmbed()
        .setColor("BLACK")
        .setTitle("The Usage Locker.. / Pg11")
        .setDescription("Other")
        .addField("feedback", "`c.feedback <feedback>` | `Aliases: none` | `Cooldown: 15 Seconds`")
        .addField("bug", "`c.bug <bug>` | `Aliases: report` | `Cooldown: 15 Seconds`")
        .addField("invite", "`c.invite` | `Aliases: none` | `Cooldown: 10`")
        .addField("dm", "`c.dm` | `Aliases: directmessage, msg, message` | `Cooldown: none`")
        .addField("dmtoggle", "`c.dmtoggle` | `Aliases: dmt` | `Cooldown: 10 Seconds`")
        .addField("setwelcome", "`c.setwelcome` | `Aliases: none` | `Cooldown: none`")
        .addField("checkwelcome", "`c.checkwelcome` | `Aliases: welcomecheck` | `Cooldown: none`")

        const pages = [
            embed,
            embed1,
            embed2,
            embed3,
            embed4,
            embed5,
            embed6,
            embed7,
            embed8,
            embed9,
            embed10,
            embed11
        ]

        const emojiList = ["⏪", "⏩"]
                    
        const timeout = '600000';

        pagination(message, pages, emojiList, timeout)

        return;
    }
}