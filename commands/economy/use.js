const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const db = require("quick.db");
require("discord-reply");
const client = new discord.Client();

module.exports = {
    name: "use",
    category: "economy",
    description: "Use A Item",
    usage: "use <item_name>",
    
    run: async (client, message, args) => {
    
        let use = new MessageEmbed()
        .setDescription("Hi User, This Command Is Currently On Update\nMake Sure To Leave A **[Feedback Here](https://discord.gg/WQAa56tnMu)** After The Command Is Done Updating!")
        .setFooter("Strike ⚡© 2021")
        .setColor("RED")
        
        return message.channel.send(use)
    }
}