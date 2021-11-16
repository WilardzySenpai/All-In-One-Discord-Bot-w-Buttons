const db = require('quick.db');
const { MessageEmbed } = require('discord.js');
const ms = require("ms");
const emote = require("../../config/emotes.json");
const discord = require("discord.js");
require('discord-reply');
const client = new discord.Client();
const Jwork = require('../../JSON/works.json');
const JworkR = Jwork[Math.floor(Math.random() * Jwork.length)];

module.exports = {
        name: "work",
        category: "economy",
        description: "Work To Earn Money",
        usage: "work",
        accessableby: "everyone"
    ,
    run: async (bot, message, args) => {
    
        let user = message.author;
        let author = await db.fetch(`work_${user.id}`)

        let timeout = 10000;

        if (author !== null && timeout - (Date.now() - author) > 0) {
            let time = ms(timeout - (Date.now() - author));

            let timeEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You Have Already Worked Recently\n**Try Again In ${time.seconds} Seconds**`);
            message.lineReplyNoMention(timeEmbed)
        } else {
            let amount = Math.floor(Math.random() * 100) + 15;
            let embed1 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`**${JworkR}** **${amount}${emote.coin}**`)
            message.lineReplyNoMention(embed1)

            db.add(`works_${user.id}`, 15)
            db.add(`money_${user.id}`, amount)
            db.set(`work_${user.id}`, Date.now())
        };
    }
};
