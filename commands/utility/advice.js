const api = require("srod-v2");
const Discord = require("discord.js");
const colors = require('./../../colors.json')

module.exports = {
  name: "advice",
  category: "utility",
  aliases: [],
  description: "Return A Random Advice!",
  usage: "Advice",
  run: async (client, message, args) => {
    
    const Data = await api.GetAdvice({ Color: "#39d822" });
    return message.channel.send(Data);
  }
};

