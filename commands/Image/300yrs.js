
const Discord = require("discord.js")
const AmeClient = require("amethyste-api");
const colors = require('./../../colors.json')

module.exports = {
  name: "3000yr",
  aliases: ["3000yrs", "3000"],
  run: async (client, message, args) => {
 
let AmeAPI = new AmeClient(client.config.imageapi);
const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;
 
		const buffer = await AmeAPI.generate("3000years", { url: user.displayAvatarURL({ format: "png", size: 512 }) });
		const attachment = new Discord.MessageAttachment(buffer, "approved.png");
	
		message.channel.send(attachment);

	}
}
