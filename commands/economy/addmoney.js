const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const emote = require("../../config/emotes.json");
const discord = require("discord.js");
const ms = require('ms');
require('discord-reply');
const client = new discord.Client();

module.exports = {
        name: "addmoney",
        category: "economy",
        description: "Adds Money To A user",
        aliases: ["addcoins"],
        usage: "addmoney [mention | ID]",
        
    run: async (bot, message, args) => {
            
        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Mention A Valid User!**")
        if (!args[1]) return message.channel.send("**Enter A Valid Amount!**")
        if (isNaN(args[1])) return message.channel.send(`**Your Amount Is Not A Number!**`);
        if (args[1] > 10000) return message.channel.send(`Cannot Add That Much Amount!\n**Max Adding Amount: 10000${emote.coin}`);
        db.add(`money_${user.id}`, args[1])
        let bal = db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`Added **${args[1]}${emote.coin}** Coins\n**New Balance: ${bal}**`);
        message.lineReplyNoMention(moneyEmbed)

    }
}