const db = require("quick.db");
const colors = require('./../../colors.json')
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {
  name: "botinfo",
	category: "info",
    aliases: ['binfo', 'botstats', 'stats', 'info'],
    description: 'Check\'s bot\'s status',
	
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor(colors.lightgreen)
            .setTitle(`Zero bot ${version}`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('				**<:upvote:886614377841713152> Uptime:**', `${ms(client.uptime)}`, true)
            .addField('				**<:upvote:886614377841713152> WebSocket Ping:**', `${client.ws.ping}ms`, true)
            .addField('				**<:upvote:886614377841713152> Memory:**', `${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)} MB RSS\n${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB Heap`, true)
            .addField('				**<:Blurple_settings:886613549663801394> Guild Count:**', `${client.guilds.cache.size} guilds`, true)
            .addField(`				**<:Member_Joins:886612845230436362> User Count:**`, `${client.users.cache.size} users`, true)
            .addField('				**<:Blurple_settings:886613549663801394> Commands:**', `${client.commands.size} cmds`,true)
            .addField('				**<:Blurple_check:886887428617543681> Node:**', `${process.version} on ${process.platform} ${process.arch}`, true)
            .addField('				**<:Blurple_settings:886613549663801394> Cached Data:**', `${client.users.cache.size} users\n${client.emojis.cache.size} emojis`, true)
            .addField('				**<:Blurple_settings:886613549663801394> Discord.js:**', `${discordjsVersion}`, true)
            .setTimestamp()
        );
    }
}

