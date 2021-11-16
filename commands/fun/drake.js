const Discord = require('discord.js');
//here attachment
const { MessageAttachment } = require('discord.js')
const colors = require('./../../colors.json')

module.exports = {
  name: 'drake',
  category: "fun",
  
  async run (client, message, args) {
    

const text1 = args.join(" ").split("/")[0]
const text2 = args.join(" ").split("/")[1]

if (!text1) return message.channel.send("<:6246_redtick:901827142826991626>  You need 2 sentences separated with \"/\" for this to work.")
if (!text2) return message.channel.send("<:6246_redtick:901827142826991626>  You need 2 sentences separated with \"/\" for this to work.")

const image = `https://api.popcatdev.repl.co/drake?text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`

const att = new Discord.MessageAttachment(image, "Drake.png")

message.channel.send(att)

  }
}

