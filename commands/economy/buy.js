const { MessageEmbed } = require("discord.js");
const emote = require("../../config/emotes.json");
const db = require('quick.db');

module.exports = {
    name: 'buy',
    description: "Buy Items from the Shop!",
    aliases: [],
    category: "economy",
    usage: "buy [item]",
    
    run: async(client, message, args) => {
    
        let purchase = args.join(" ")
        let cash = await db.fetch(`money_${message.author.id}`)

        if(!purchase) {
            const buyError = new MessageEmbed()
            .setDescription("You Need to Provide An Item Yo want To Purchase!")
            .setColor("BLUE")

            return message.channel.send(buyError)
        }
        let items = await db.fetch(`items_${message.author.id}`, {items: []})

        if(purchase == 'Thief Outfit') {
            if(cash < 300) {
                const purchaseError = new MessageEmbed()
                .setDescription("You Don\'t Have Enough Money To Buy A Thief Outfit!")
                .setColor("BLUE")

                return message.channel.send(purchaseError)
            }

            db.subtract(`money_${message.author.id}`, 300)
            db.push(`items_${message.author.id}`, "Thief Outfit")

            const purchaseThiefOutfitSuccess = new MessageEmbed()
            .setDescription(`Successfuly Bought One Thief Outfit For 300${emote.coin}`)
            .setColor("BLACK")

            message.channel.send(purchaseThiefOutfitSuccess)
           
        }
            
            if(purchase == 'Gift Box') {
            if(cash < 1200) {
                const purchaseError8 = new MessageEmbed()
                .setDescription("You Don\'t Have Enough Money To Buy A Gift Box")
                .setColor("BLUE")

                return message.channel.send(purchaseError8)
            }
            
            db.subtract(`money_${message.author.id}`, 1200)
            db.push(`items_${message.author.id}`, 'Gift Box')

            const purchaseGiftBoxSuccess = new MessageEmbed()
            .setDescription(`Successfuly Bought One Gift Box For 1200<:Coin:859014238353620993>`)
            .setColor("BLACK")

            message.channel.send(purchaseGiftBoxSuccess)
            
        }
    }
}