require('dotenv').config();
const Discord = require("discord.js");
const config = require('../config.json');
const { generateDependencyReport } = require('@discordjs/voice');
//const { Intents } = require('discord.js');
//const { GCommandsClient } = require("gcommands")
const client = new Discord.client();
// const client = new GCommandsClient({
//     loader: {
//         cmdDir: __dirname + "/commands/",
//     },
//     language: "english",
//     commands: {
//         slash: 'both',
//         context: false,
//         prefix: "*"
//     },
//     intents: [["GUILDS","GUILD_MESSAGES"],
//         Intents.FLAGS.GUILDS,
//         Intents.FLAGS.GUILD_VOICE_STATES,
//         Intents.FLAGS.GUILD_MEMBERS
//     ]

// })

function start () {
    console.log(generateDependencyReport());
    client
        .on("log", console.log)
        .on("debug", console.log)
    client.login(process.env.DISCORD_TOKEN).then(() => {console.log("Funcionando... ")}).catch(err =>console.log(err))


    
}

module.exports = {start}
