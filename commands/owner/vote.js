const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "vote",
  description: "Information",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
    .setTitle(`Vote Me`)
      .setDescription(`*Click the buttons Below to vote me *`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter(`Requested by: ${message.author.tag}`)
      .setColor("RANDOM")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('disbotlist') 
      .setURL(`https://disbotlist.xyz/bot/892003058425401354/vote`);
      let button2 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('top.gg') 
      .setURL(`https://top.gg/bot/892003058425401354/vote`);
      let button3 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('dbl.') 
      .setURL(`https://discordbotlist.com/bots/zerobot-6845/upvote/video`);


      return message.channel.send(helpEmbed,{
        button: [button1,button2,button3],
      });

  },
};