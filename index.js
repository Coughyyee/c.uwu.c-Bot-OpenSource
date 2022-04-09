const Discord = require('discord.js');
const bot = new Discord.Client(); //the bot is the variable name (e.g. can change it to 'client')\\

const config = require('./config.json');
bot.config = config;


//other things\\
const { readdirSync, promises } = require('fs');
const ms = require('ms')
const path = require('path');
const settings = require('./settings.json'); //bot version + developer + prefix


//mongo/mongoose stuff\\
const mongoose = require('mongoose');
mongoose.connect(`<MONGO CONNECTION LINK>`, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(console.log('Connected to mongoDB Database!'))





const Timeout = new Discord.Collection();
bot.commands = new Discord.Collection();
const commandFolders = readdirSync('./commands');


//event Handler/loader
require('./util/eventLoader')(bot);


//-------------------------------------------------------------------------------------------------------------command handler\\

for (const folder of commandFolders) {
	const commandFiles = readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
		bot.commands.set(command.name, command);
	}
}

bot.on("error", console.error);


//--------------------------------------------------------------------------------------------------------------------------\\
const Levels = require('discord-xp');

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    //levels
    const randomXP = Math.floor(Math.random() * 31) + 1;
    const hasLeveledUP = await Levels.appendXp(message.author.id, message.guild.id, randomXP);
    if(hasLeveledUP) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`Congrats ${message.member}! You are now Level ${user.level}!`)
    }
    //

    const escapeRegex = str => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const prefixRegex = new RegExp(`^(<@!?${bot.user.id}>|${escapeRegex(settings.prefix)})\\s*`);

    if(!prefixRegex.test(message.content)) return;
    //if(message.content.startsWith(prefix)) {

        const [, matchedPrefix] = message.content.match(prefixRegex);

        const args = message.content.slice(matchedPrefix.length).trim().split(/ +/);

        //const cmd = args.shift().toLowerCase();
        const commandName = args[0].toLowerCase();

        const command = bot.commands.get(commandName)
		    || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
	    if (!command) return;
        
        if (command) {
            if(command.cooldown) {
                if(Timeout.has(`${command.name}${message.author.id}`)) return message.channel.send(`Please Wait \`${ms(Timeout.get(`${command.name}${message.author.id}`) - Date.now(), {long : true})}\` Before using this command again! >..<.`)
                command.run(bot, message, args)
                Timeout.set(`${command.name}${message.author.id}`, Date.now() + command.cooldown)
                setTimeout(() => {
                    Timeout.delete(`${command.name}${message.author.id}`)
                }, command.cooldown)
            } else command.run(bot, message, args);
        }
    
})



//-------------------------------------------------------------------------------------------------------------------on Guild Join\\
bot.on('guildCreate', (guild) => {
    let channelToSend;
    guild.channels.cache.forEach((channel) => {
        if (
            channel.type === "text" &&
            !channelToSend &&
            channel.permissionsFor(guild.me).has("SEND_MESSAGES")
        ) channelToSend = channel;
    });
    if(!channelToSend) return;

    let channeltoembed = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setAuthor(`OwOwoOoOo... Thank you for inviting me to ${guild.name}!`)
    .setDescription("To get started, Please type `c.help` in a text channel!!")
    .addField("About Mee", `Hello, I am C.UwU.C, i am a fun bot that has many fun features! But i can also be serious as i have very many moderation commands aswell!! So have fun with me, i hope my Developers made me good enough for you >..<\n\nAlso Please feel free to check out \`c.botinfo\` to see my stats (<>..<>)`)
    .addField("Need Help?", `Feel free to message my Developer(s) on Discord! His / Thier tag(s): ${settings.developerTags}.\nFeel Free to also join *My Discord Server* [here](https://discord.gg/jVP39rjeRx)!`)
    .setFooter("Enjoy The bot!\n*Pss, Please Vote Me On [top.gg](https://top.gg/bot/781683455024824340). Thanks!*")

    channelToSend.send(channeltoembed).catch(e => {
        if (e) {
            return;
        }});

    console.log(`Joined A Server! ServerName: ${guild} | ServerID: ${guild.id}`)
})


//on member join role
bot.on("guildMemberAdd", member => {
    if(member.guild.id != "758093768003158188") return;

    member.roles.add("832385374071291904");
})


//----------------------------------------------------------------------------------------------------------------distube (music)\\

const distube = require('distube');
bot.distube = new distube(bot, { searchSongs: false, emitNewSongOnly: true });
bot.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user.username}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Added \`${song.name}\` - \`${song.formattedDuration}\`\nto queue by ${song.user.username}`
    ))
    .on('error', (message, e) => {
		console.error(e)
		message.channel.send(`An error encountered: **${e}**`)
	})





//-------------------------------------------------------------------------------------------------------------MongoDB Schema Stuff\\
//---------------------------------------------------------------------------------------------------------------------------------\\
//---------------------------------------------------------------------------------------------------------------------------------\\
//---------------------------------------------------------------------------------------------------------------------------------\\


//-------------------------------------------------------------------------------------------------------------Server Welcome thing\\
const WelcomeSchema = require('./schema/welcome');
const welcomemsgs = require('./assets/JSON/welcomeMessages.json');

bot.on("guildMemberAdd", async (member, guild) => {
    WelcomeSchema.findOne({ guildId: member.guild.id }, async (e, data) => {
        if(!data) return;
        const user = member.user;
        
        const channel = member.guild.channels.cache.get(data.channelId);
        const welmsgs = welcomemsgs;
        let result = Math.floor((Math.random() * welmsgs.length));

        channel.send(`Welcome ${user}! `+ welmsgs[result]);
    });
})

//----------------------------------------------------------------------------------------------------------------Mute Stuff\\
const muteSchema = require('./schema/mute');

bot.on('guildMemberAdd', async (member) => {
    const data = await muteSchema.findOne({ guildId: member.guild.id });
    if(!data) return;
    const user = data.userId.findIndex((prop) => prop === member.id);
    if(user == -1) return;
    const role = member.guild.roles.cache.find((role) => role.name.toLowerCase() === "muted");
    member.roles.add(role.id);
})


//----------------------------------------------------------------------------------------------------------------dm shit Stuff\\
const dmtoggleSchema = require('./schema/dmToggle');

bot.on('guildMemberAdd', async (member) => {
    dmtoggleSchema.findOne({ userId: member.id }, async (e, data) => {
        if(!data) {
            new dmtoggleSchema({
                userId: member.id,
                toggle: 1,
            }).save();
        }
    })
})

//---------------------------------------------------------------------------------------------------------------Econemy Functions\\
const moneySchema = require('./schema/money');

bot.bal = (userId) => new Promise(async ful => {
    const data = await moneySchema.findOne({ userId });
    if(!data) return ful(0);
    ful(data.coins);
})

bot.add = (userId, coins) => {
    moneySchema.findOne({ userId }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins += coins;
        } else {
            data = new moneySchema({ userId, coins })
        }
        data.save();
    })
}

bot.remove = (userId, coins) => {
    moneySchema.findOne({ userId }, async(err, data) => {
        if(err) throw err;
        if(data) {
            data.coins -= coins;
        } else {
            data = new moneySchema({ userId, coins: -coins })
        }
        data.save();
    })
}



//----------------------------------------------------------------------------------------------------------------OnGuildMemberAdd SimJoin\\
//  bot.on('guildMemberAdd', async (member) => {
//     const { guild } = member;
//     console.log(member.user.tag); //<-- turn on when using `c.simjoin`!

//  })




bot.login(config.token);