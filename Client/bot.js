require('dotenv').config();
//const Discord = require("discord.js");
//const app = new Discord.Client();
const { generateDependencyReport } = require('@discordjs/voice');
//const { Intents } = require('discord.js');
//const { GCommandsClient } = require("gcommands")


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



    
}

module.exports = {start}
