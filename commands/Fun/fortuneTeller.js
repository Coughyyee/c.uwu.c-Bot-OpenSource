const ftr = require('../../assets/JSON/fortuneTellResponses.json')

module.exports = {
    name: "fortune",
    descrption: "a shitty fortune teller",

    async run (bot, message, args) {


        const { channel } = message;

        let opt1 = Math.floor(Math.random() * ftr.op1.length)
        let opt2 = Math.floor(Math.random() * ftr.op2.length)
        let opt3 = Math.floor(Math.random() * ftr.op3.length)
        let opt4 = Math.floor(Math.random() * ftr.op4.length)
        let opt5 = Math.floor(Math.random() * ftr.op5.length)
        let opt6 = Math.floor(Math.random() * ftr.op6.length)
        let opt7 = Math.floor(Math.random() * ftr.op7.length)
        let opt8 = Math.floor(Math.random() * ftr.op8.length)
        

        channel.send("Pick a number between 1-8.. You have **10 seconds**!")
        channel.awaitMessages(m => m.author.id == message.author.id, {max: 1, time: 15000, error: ["ERROR"]})
        .then(collected => {
            if(collected.first().content === "1") return channel.send(ftr.op1[opt1])
            if(collected.first().content === "2") return channel.send(ftr.op2[opt2])
            if(collected.first().content === "3") return channel.send(ftr.op3[opt3])
            if(collected.first().content === "4") return channel.send(ftr.op4[opt4])
            if(collected.first().content === "5") return channel.send(ftr.op5[opt5])
            if(collected.first().content === "6") return channel.send(ftr.op6[opt6])
            if(collected.first().content === "7") return channel.send(ftr.op7[opt7])
            if(collected.first().content === "8") return channel.send(ftr.op8[opt8])
            else return channel.send("Invalid Response!")
        }).catch(() => { return channel.send("Times Up! You didnt pick in time...") });

    }
}