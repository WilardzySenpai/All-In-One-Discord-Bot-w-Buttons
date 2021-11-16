const { MessageEmbed } = require('discord.js');
const emote = require("../../config/emotes.json");
const { default_prefix } = require("../../config.json");
const db = require('quick.db');

module.exports = {
    name: 'shop',
    category: "economy",
    aliases: ["store"],
    description: "Basic Equipment Store",
    usage: "shop",
    run: async (client, message, args) => {

        const store = new MessageEmbed()
        .setTitle('Store')
        .setColor("YELLOW")
        .addField('**Thief Outfit**', `**You Can't Rob Anyone Without This Set!**, Buy This For **300<:Coin:859014238353620993>**\n**Use \`${default_prefix}buy Thief Outfit\` To Buy**`)
        
        message.channel.send(store)
    }
}