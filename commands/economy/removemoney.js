const { MessageEmbed }= require("discord.js");
const db = require("quick.db");
const emote = require("../../config/emotes.json");

module.exports = {
        name: "removemoney",
        aliases: "removecoins",
        category: "economy",
        description: "Removes money from a user",
        usage: "removemoney [mention | ID]",
        
    run: async (bot, message, args) => {
        
        if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("Missing Permission \`MANAGE_GUILD\`");
        if (!args[0]) return message.channel.send("**Mention A User!**")

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args[0].toLocaleLowerCase());
        if (!user) return message.channel.send("**Mention A Valid User!**")

        if (!args[1]) return message.channel.send("**Enter A Valid Amount!**")
        if (isNaN(args[1])) return message.channel.send("**Enter A Valid Amount!**");
        let bal = await db.fetch(`money_${user.id}`)

        if (args[0] > bal) return message.channel.send("**Cannot Remove That Much Money!**")
        db.subtract(`money_${user.id}`, args[1])
        let bal2 = await db.fetch(`money_${user.id}`)

        let moneyEmbed = new MessageEmbed()
            .setColor("GREEN")
            .setDescription(`**${args[1]}${emote.coin}** Was Removed\n**New Balance: ${bal2}${emote.coin}**`);
        message.channel.send(moneyEmbed)

    }
}