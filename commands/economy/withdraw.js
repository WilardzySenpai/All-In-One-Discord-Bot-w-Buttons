const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const emote = require("../../config/emotes.json");
require('discord-reply');
const client = new discord.Client();
const db = require("quick.db");

module.exports = {
        name: "withdraw",
        aliases: ["with"],
        category: "economy",
        description: "Withdraws Money From Bank",
        usage: "withdraw <amount>",
    
    run: async (bot, message, args) => {
        
        let user = message.author;

        let member2 = db.fetch(`bank_${user.id}`)

        if (args.join(' ').toLocaleLowerCase() == 'all') {
            let money = await db.fetch(`bank_${user.id}`)
            let embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`**You Do Not Have Any Money To Withdraw!**`)
            if (!money) return message.channel.send(embed)
            db.subtract(`bank_${user.id}`, money)
            db.add(`money_${user.id}`, money)
            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You Have Withdrawn **All** Coins From Your Bank`); 
            message.lineReplyNoMention(embed5)

        } else {

            let embed2 = new MessageEmbed() 
                .setColor("RED")
                .setDescription(`Specify An Amount To Withdraw!`);

            if (!args[0]) {
                return message.channel.send(embed2)
            }
            let embed6 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Your Amount Is Not A Number!`)
                .setFooter("s!with all")
            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            }
            let embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You Can't Withdraw Negative Money!`);

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You Don't Have That Much Money In Your Bank!`);

            if (member2 < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You Have Withdrawn **${args[0]}${emote.coin}** Coins From Your Bank!`);

            message.lineReplyNoMention(embed5)
            db.subtract(`bank_${user.id}`, args[0])
            db.add(`money_${user.id}`, args[0])
        }
    }
}