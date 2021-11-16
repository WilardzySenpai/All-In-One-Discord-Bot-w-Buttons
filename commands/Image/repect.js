const Discord = require('discord.js');
const AmeClient = require('amethyste-api');
const AmeAPI = new AmeClient("36d73cb74451722a36fe5321526fa29649bdc850444fea8269e6f21276ece44925ae934dd478a803886f53420dfe3e3498f7dc3d0380e278a60d2f50cdc92e72");

module.exports = {
   
        name: 'respect',
				cooldown: 10000,
        description: 'Editing image and send respect one!',
        aliases: ["respected"],
        usage: '`a!respect @user`',
        accessableby: "",
    run: async (client, message, args) => {
    
        let user = await message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.guild.members.cache.find(r => r.displayName.toLowerCase() === args.join(' ').toLocaleLowerCase()) || message.member;
        let m = await message.channel.send("**Please Wait...**");
        let buffer = await AmeAPI.generate("missionpassed", { url: user.user.displayAvatarURL({ format: "png", size: 2048 }) });
        let attachment = new Discord.MessageAttachment(buffer, "respect.png");
        m.delete({ timeout: 5000 });
        message.channel.send(attachment);

    }
}
