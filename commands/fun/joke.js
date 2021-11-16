const superagent = require('superagent');
const colors = require('./../../colors.json')
const Discord = require('discord.js');

module.exports = {
  name: "joke",
  category: "fun",
  aliases: [],
  run: async(client, message, args) => {

        await superagent
        .get('http://icanhazdadjoke.com/')
        .set('Accept', 'application/json')
		   .end((err, response) => {
        let jEmbed = new Discord.MessageEmbed()
        .setTitle("Joke")
        .setDescription(response.body.joke)
        .setColor(colors.uptime);
        message.channel.send(jEmbed);
		})
    }
}
