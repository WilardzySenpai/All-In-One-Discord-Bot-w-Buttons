const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const emote = require("../../config/emotes.json");
const ms = require("ms");

module.exports = {
        name: "weekly",
        category: "economy",
        description: "Gives You 10K Per Week",
        usage: "weekly",
        
    run: async (bot, message, args) => {

        let user = message.author;
        let timeout = 604800000;
        let amount = 10000;

        let weekly = await db.fetch(`weekly_${user.id}`);

        if (weekly !== null && timeout - (Date.now() - weekly) > 0) {
            let time = ms(timeout - (Date.now() - weekly));

            let timeEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You Have Already Collected Your Weekly Reward\nCollect It Again In ${time.days} Days ${time.hours} Hours ${time.minutes} Minutes ${time.seconds} Seconds `);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You've Collected Your weekly Reward Of **${amount}${emote.coin}**\n**Collect It Again After 7 Days**`)
                .setFooter("https://discord.gg/WQAa56tnMu")
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`weekly_${user.id}`, Date.now())


        }
    }
}