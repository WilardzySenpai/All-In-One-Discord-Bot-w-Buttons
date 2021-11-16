const { MessageEmbed } = require("discord.js");
const discord = require("discord.js");
const emote = require("../../config/emotes.json");
require('discord-reply');
const client = new discord.Client();
const db = require("quick.db");

module.exports = {
        name: "deposit",
        aliases: ["dep"],
        category: "economy",
        description: "Deposits money to bank",
        usage: "deposit <amount>",
        
    run: async (bot, message, args) => {

        let user = message.author;

        let member = db.fetch(`money_${user.id}`)

        if (args[0] == 'all') {
            let money = await db.fetch(`money_${user.id}`)

            let embedbank = new MessageEmbed()
                .setColor('RED')
                .setDescription("You Don't Have Any Money To Deposit")

            if (!money) return message.lineReplyNoMention(embedbank)

            db.subtract(`money_${user.id}`, money)
            db.add(`bank_${user.id}`, money)
            let sembed = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You Have Deposited **All** Coins Into Your Bank`);
            message.channel.send(sembed)

        } else {

            let embed2 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Specify An Amount To deposit`);

            if (!args[0]) {
                return message.channel.send(embed2)
                    .catch(err => message.channel.send(err.message))
            }
            let embed6 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`Your Amount Is Not A Number!`)
                .setFooter("s!dep all")
            if(isNaN(args[0])) {
                return message.channel.send(embed6)
            
            }
            let embed3 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You Can't Deposit Negative Money`);

            if (message.content.includes('-')) {
                return message.channel.send(embed3)
            }
            let embed4 = new MessageEmbed()
                .setColor("RED")
                .setDescription(`You Don't Have That Much Money!`);

            if (member < args[0]) {
                return message.channel.send(embed4)
            }

            let embed5 = new MessageEmbed()
                .setColor("GREEN")
                .setDescription(`You Have Deposited **${args[0]}${emote.coin}** Into Your Bank!`);

            message.lineReplyNoMention(embed5)
            db.subtract(`money_${user.id}`, args[0])
            db.add(`bank_${user.id}`, args[0])

        }
    }
}