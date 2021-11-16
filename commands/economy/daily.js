const { MessageEmbed } = require("discord.js");
const emote = require("../../config/emotes.json");
const db = require("quick.db");
const ms = require("ms");

module.exports = {
        name: "daily",
        category: "economy",
        description: "Gives You 5K Per day",
        usage: "daily",
        
        run: async (bot, message, args) => {
    
        let user = message.author;

        let timeout = 86400000;
        let amount = 5000;

        let daily = await db.fetch(`daily_${user.id}`);

        if (daily !== null && timeout - (Date.now() - daily) > 0) {
            let time = ms(timeout - (Date.now() - daily));

            let timeEmbed = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You've Already Collected Your Daily Reward\nCollect It Again After ${time.hours} Hours ${time.minutes} Minutes ${time.seconds} Seconds`);
            message.channel.send(timeEmbed)
        } else {
            let moneyEmbed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You've Collected Your Daily Reward Of **${amount}${emote.coin}**\n**Collect Again Tomorrow**`)
                .setFooter("Credits To Shark™ YT#2710")
            message.channel.send(moneyEmbed)
            db.add(`money_${user.id}`, amount)
            db.set(`daily_${user.id}`, Date.now())


        }
    }
}