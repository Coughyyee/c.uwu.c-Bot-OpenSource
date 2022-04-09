const dadjoke = require('../../assets/JSON/dadjokes.json')

module.exports = {
    name: "dadjoke",
    description: "tells a bad dad joke",

    async run (bot, message, args) {

        const { channel } = message;

        args = args.join(" ")
        channel.send(`${dadjoke[Math.floor(Math.random() * dadjoke.length)]}`);
    }
}