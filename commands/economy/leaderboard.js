const { MessageEmbed } = require('discord.js');
const emote = require("../../config/emotes.json");
const db = require('quick.db');

module.exports = {
  
        name: "leaderboard",
        aliases: ['lb'],
        category: 'economy',
        description: 'Shows Server\'s Top 10 Users of Economy Leaderboard',
        usage: 'leaderboard',
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
        
        let money = db.all().filter(data => data.ID.startsWith(`money_`)).sort((a, b) => b.data - a.data);
        if (!money.length) {
            let noEmbed = new MessageEmbed()
                .setAuthor(message.member.displayName, message.author.displayAvatarURL())
                .setColor("YELLOW")
                .setFooter("Nothing To See Here Yet!")
            return message.channel.send(noEmbed)
        };

        money.length = 10;
        var finalLb = "";
        for (var i in money) {
            if (money[i].data === null) money[i].data = 0
            finalLb += `**${money.indexOf(money[i]) + 1}. ${bot.users.cache.get(money[i].ID.split('_')[1]) ? bot.users.cache.get(money[i].ID.split('_')[1]).tag : "Unknown User#0000"}** - ${money[i].data}${emote.coin}\n`;
        };

        const embed = new MessageEmbed()
            .setTitle(`Economy Leaderboard`)
            .setColor("BLACK")
            .setDescription(finalLb)
            .setFooter("https://is.gd/codersc")
            .setTimestamp()
        message.channel.send(embed);
    }
};