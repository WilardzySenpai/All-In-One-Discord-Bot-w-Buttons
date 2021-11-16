const Discord = require('discord.js');

module.exports = {
	name: 'snipe',
	cooldown: 1000,
	usage: '`a!snipe`',
	description: 'get the deleted message',
	aliases: ['s'],
	run: async (client, message, args) => {
		const msg = client.snipes.get(message.channel.id);
		if (!msg)
			return message.channel.send(
				'There are no deleted messages in this channel!'
			);
		const embed = new Discord.MessageEmbed()
			.setAuthor(msg.author)
			.setDescription(msg.content)
			.setColor('#8AFB17')
			.setThumbnail(
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAfE8tCpK5BZH-SY6GahjM75kQW2qrSEX6Kg&usqp=CAU.png'
			)
			.setTimestamp();
		if (msg.image) embed.setImage(msg.image);

		message.channel.send(embed);
	}
};

