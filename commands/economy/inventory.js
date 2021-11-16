const { MessageEmbed } = require('discord.js');
const emote = require("../../config/emotes.json")
const db = require('quick.db');

module.exports = {
    name: 'inventory',
    category: "economy",
    description: "View Your Inventory",
    aliases: ['inv'],
    usage: "inventory",
    run: async(client, message, args) => {

        let items = db.fetch(`items_${message.author.id}`)
        if(items === null) items = "**Nothing Bought Yet**\n**Join The [Development Server](https://is.gd/codersc)**";

        const Embed = new MessageEmbed()
        .setTitle(`${emote.store} Inventory`)
        .setDescription(items)
        .setColor("BLUE")

        message.channel.send(Embed)
    }
}