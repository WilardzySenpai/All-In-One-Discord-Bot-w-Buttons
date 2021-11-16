require("http").createServer((req, res) => res.end("Self Coded By Pogers And SadSenpai")).listen(process.env.PORT || 8000)
const {Client, 
      Collection, 
       Discord
      } = require("discord.js");
const client = new Client({
  disableEveryone: true
});
const { config } = require('dotenv')
const { prefix } = require("./config.json");
const bot = new Client({
  disableEveryone: true
});
 require('discord-buttons')(client);
const emote = require("./config/emotes.json");
const { MessageEmbed } = require('discord.js');
const ms = require("ms");
const fetch = require("fetch");
const db = require("quick.db")
let number = 69
console.log(`Number = ${number}`) //correct method

//----Handler------
client.commands = new Collection();
client.aliases = new Collection();

['command'].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});


//-------Ping------------
 const express = require("express");
 const app = express();

 app.get("/", (req, res) => {
     res.send("SadSenpai online");

 });

 app.listen(3000, () => {
     console.log("server started https://discord.gg/debYdxKWj7%22");
 });

//------------------------Snipe--------------------------

client.snipes = new Map();
client.on("messageDelete", function(message, channel) {
  client.snipes.set(message.channel.id, {
    content: message.content,
    author: message.author.tag,
    image: message.attachments.first()
      ? message.attachments.first().proxyURL
      : null
  });
});


//--------Message-------
client.on('message', async message => {
  if (message.author.bot) return;
  if (!message.guild) return;

  if (!message.content.startsWith(prefix)) return;

  // If message.member is uncached, cache it.
  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));
  if (!command) return;
  if (command) command.run(client, message, args);});

client.on("message", message => {
  if (message.content === "hello") {
    return message.channel.send("Hello");
  }
});

//
client.on('message', async (message) => {
  if(message.content.includes(client.user.id)) {
    const embed = new MessageEmbed()
    .setTitle(`Huh? I was Pinged?!`)
    .setDescription(`Hello, my prefix is \`${prefix}\` Use \`${prefix}help\` to see my commands!`)
    .setColor(`#0x2f3136`)
    .setFooter(`This bot was made by SadSenpai and Poggers`)
  return message.channel.send(embed);
}
})


//
client.on('guildCreate', guild => {
    const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
 let embed = new MessageEmbed()
 .setColor('BLACK')
 .setTitle('Connected To New Server')
 .setURL('https://discord.gg/debYdxKWj7')
 .setDescription('<:pinkdot:884750198990045216> Thank You For Inviting Me. My prefix is `>`. Run l.help for more info about me!')
 .setThumbnail('https://media.discordapp.net/attachments/849987856679436298/909763117377028137/maestro.png?width=85&height=85')
 .addFields(
 { name: 'Creator', value: 'SadSenpai' }
 )

 .setImage('https://media.discordapp.net/attachments/849987856679436298/909763117377028137/maestro.png?width=85&height=85')
 .setTimestamp()
 .setFooter('SadSenpai', 'https://discord.gg/debYdxKWj7');
channel.send(embed);
})  


//------status
client.on("ready", () => {
  console.log(`Hey user ${client.user.tag} has logged in. is online`);
  client.user.setPresence({
    activity : {
      name: ">help | SkyAnime", 
      
      // -----ALL TYPES----
      // PLAYING
      // WATCHING
      // STREAMING
      // LISTENING
      
      type: "PLAYING"
    },
    
    //TYPES
    // -- dnd ( do not disturb )
    // -- idle
    // -- invisible
    // -- online
    
    status : 'online'
  })
})

client.login(process.env.TOKEN);
