const Discord = require("discord.js-commando");
const {RichEmbed} = require('discord.js');
const path = require('path');

let botOwners = [
    "474307125137637386" // Terry
];

const chickFilA = new Discord.Client({
    commandPrefix: "#",
    owner: botOwners,
    disableEveryone: true,
    unknownCommandResponse: false
});

chickFilA.registry
    .registerDefaultTypes()
    .registerGroups([
        ['food', 'Food']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands({
        help: false
    })
    .registerCommandsIn(path.join(__dirname, './commands'));


chickFilA.on("ready", () => {
    console.log(`${chickFilA.user.username} [${chickFilA.user.id}] connected to Discord.`);
    chickFilA.user.setActivity("with food!");
});

chickFilA.login(process.env.botToken);
