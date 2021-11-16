const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
require('@weky/inlinereply');
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");
const { Fight } = require('weky');

module.exports = {
  name: "fight",

  description: "Fun",

  run: async (client, message, args) => {


     const target = message.mentions.members.first() || message.guild.members.cache.get(args[0])

    if(!target) return message.channel.send(`Mention your opponent to Fight`)

    await Fight({message: message,
    opponent: target,
            embed: {
                title: `${message.author.username} | Fight`,
                color: '#5865F2',
        footer: "Best of Luck",
                timestamp: true,
            },
       buttons: {
        accept: "Play",
        deny: "Ignore"
      },
      othersMessage: "Bruh, This is not your game",
      cancelMessage: "<@{{opponent}}> refused to play with you. I think they knows that they will lost the game",
      winMessage: "*WOW*, <@{{winner}}> had a great victory!.",
      acceptMessage: "<@{{opponent}}>, <@{{challenger}}> wanna fight with you."
        });
   
  
  
  },};