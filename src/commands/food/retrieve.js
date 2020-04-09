const commando = require("discord.js-commando");
const {RichEmbed} = require('discord.js');

module.exports = class Retrieve extends commando.Command {
    constructor (client) {
        super(client, {
            name: "retrieve",
            group: "food",
            memberName: "retrieve",
            description: "Retrieves a ChickFilA survey code.",
            clientPermissions: ["MANAGE_ROLES"],
            examples: ["retrieve"],
            throttling: {
                usages: 1,
                duration: 30
            }
        });
    }

    hasPermission(msg) {
        return this.client.isOwner(msg.author);
    }

    async run(message) {
        // let response = await database.verify_key(key, message.author.id, email);
        let embed = new RichEmbed()
          .setColor("#00FF00")
          .setTitle(message.author.tag)
          .setThumbnail(message.author.displayAvatarURL)
          .setFooter("ChickFilA Bot", "https://cdn.discordapp.com/avatars/697572905256484915/f0236af2002bdd37e283b781a5c01495.png?size=128")
          .setTimestamp()
          .setDescription("Hello");

        // if (typeof response === "object" && response !== null) {
        //     let group_member = group_server.members.get(message.author.id);
        //     if (response["Subscription ID"] === "Lifetime") {
        //         let lifetime_role = group_server.roles.find(role => role.name === botconfig.discord.lifetimeRole);
        //         await group_member.addRole(lifetime_role);
        //     };
        //     let members_role = group_server.roles.find(role => role.name === botconfig.discord.memberRole);
        //     await group_member.addRole(members_role);
        //     embed.setDescription("Account **successfully** authenticated!")
        //     Object.keys(response).forEach(key => {
        //         embed.addField(key, response[key], true);
        //     });
        //
        // } else {
        //     embed.setDescription(response);
        // };

        await message.author.send({embed});
    }
}
